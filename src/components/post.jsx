import { useState } from 'react';
import { FaEdit, FaTrash, FaEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import EditForm from './editForm';
import { IoMdGlobe } from 'react-icons/io';

const Post = ({ post, data, setData }) => {
  const [isEditing, setEditing] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const deletePost = (id) => {
      const postList = data.filter(post => post.id !== id);
      setData(postList);
  }

  const handleLikePost = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditFormClose = () => {
    setEditing(false);
  };


  return (
    <main className={`main ${isEditing ? 'editing' : ''}`}>
      <div className={`card ${isEditing ? 'editing' : ''}`}>
        <div className='profile'>
          <img src='/Antonette.svg' className='card-img' alt='Profile' />
        </div>
        <article className='article'>
          <h3>{post.name}</h3>
          <p className='data'>
            <FaEnvelope /> {post.email}
          </p>
          <p className='data'>
            <FiPhone /> {post.number}
          </p>
          <p className='data'>
            <IoMdGlobe /> {post.website}
          </p>
        </article>
        <div className='footer'>
          <div className='icons'>
            <img
              src={isLiked ? '/liked.svg' : '/like.svg'}
              alt='like'
              width={20}
              height={20}
              onClick={handleLikePost}
              className='like'
              disabled={isEditing}
            />
          </div>
          <div className='icons second-icon'>
            <FaEdit 
              className={`button edit ${isEditing ? 'disabled' : ''}`}
              onClick={handleEditClick} 
            />
          </div>
          <div className='icons'>
            <FaTrash 
              className={` trash ${isEditing ? 'disabled' : ''}`} 
              onClick={() => deletePost(post.id)} 
            />
          </div>
        </div>

        {/* Conditionally render EditForm */}
        {isEditing && (
        <EditForm
        handleEditFormClose={handleEditFormClose} 
        data={data} 
        setData={setData}
        post={post} />
        )}
      </div>
    </main>
  );
};

export default Post;
