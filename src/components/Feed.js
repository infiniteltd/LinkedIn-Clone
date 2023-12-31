import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../utilities/InputOption';
import { PermMedia, EventNote, CalendarViewDay } from '@mui/icons-material';
import Post from './Post';
import { collection, getDocs, addDoc, orderBy, query } from 'firebase/firestore';
import { db, serverTimestamp } from '../firebase';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const colRef = collection(db, 'posts');


    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(query(colRef, orderBy('timestamp', 'desc')));

            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })));
        };

        fetchData();
    }, [colRef]);



    const sendPost = (e) => {
        e.preventDefault();

        addDoc(colRef, {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: serverTimestamp()
        });

        setInput('');
    };


    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Start a post' />
                        <button onClick={sendPost} type='submit'>Post</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={PermMedia} title='Media' color='#378fe9' />
                    <InputOption Icon={EventNote} title='Event' color='#c37d16' />
                    <InputOption Icon={CalendarViewDay} title='Write article' color='#e06847' />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {posts && posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                    return (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    );
                })}
            </FlipMove>
        </div>
    );
}

export default Feed;
