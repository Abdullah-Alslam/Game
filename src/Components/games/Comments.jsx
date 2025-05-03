import { useState, useEffect } from "react";

const Comments = ({ gameId }) => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  // تحميل التعليقات عند فتح الصفحة
  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("comments")) || {};
    setList(all[gameId] || []);
  }, [gameId]);

  // عند الإرسال
  const send = () => {
    if (!text.trim()) return;

    const newOne = { content: text, time: new Date().toLocaleString() };
    const all = JSON.parse(localStorage.getItem("comments")) || {};
    const updated = [newOne, ...(all[gameId] || [])];

    all[gameId] = updated;
    localStorage.setItem("comments", JSON.stringify(all));

    setList(updated);
    setText("");
  };

  return (
    <div>
      <h3>Comments</h3>
      <input className="w-[180px] h-[40px] bg-[yellow] text-[black]"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder=""
      />
      <button onClick={send}>Send</button>

      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item.content} <br />
            <small>{item.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
