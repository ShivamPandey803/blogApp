import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.unsplash.com/photo-1601922245011-b614dad27246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlbmNoJTIwc3RyZWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://keepcalmandwander.com/wp-content/uploads/2017/02/Hawa-Mahal-at-Night-Jaipur-4-960x639.jpg" />
      <Post img="https://cdn.britannica.com/23/120923-050-8FF29907/Nanga-Parbat.jpg"/>
      <Post img="https://ihplb.b-cdn.net/wp-content/uploads/2018/02/beautiful-lakes-kerala-768x430.jpg"/>
      <Post img="https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg"/>
    </div>
  );
}
