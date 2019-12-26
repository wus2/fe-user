import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import Message from './message-item';
import Input from './Input';

import './Chat.css';

export default function Chat(props) {
  const userState = useSelector(state => state.userState);
  const { socket, username } = userState;

  const [state, setState] = React.useState({
    messages: [],
    user: null
  });
  socket.on('init', res => setState({ ...state, user: res })); // lắng nghe event có tên 'id'
  socket.on('chat', response => {
    newMessage(response);
  });
  useEffect(() => {
    socket.on('init', res => setState({ ...state, user: res })); // lắng nghe event có tên 'id'
    socket.on('chat', response => {
      newMessage(response);
    }); // lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
  }, []);

  // Khi có tin nhắn mới, sẽ push tin nhắn vào state mesgages, và nó sẽ được render ra màn hình
  const newMessage = m => {
    const newMess = state.messages;
    const max = newMess.length;
    newMess.push({
      id: max + 1,
      userId: m.id,
      message: m.message,
      sender: m.sender
    });

    const objMessage = $('.messages');
    if (
      objMessage[0].scrollHeight - objMessage[0].scrollTop ===
      objMessage[0].clientHeight
    ) {
      setState({ ...state, messages: newMess });
      objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 400); // tạo hiệu ứng cuộn khi có tin nhắn mới
    } else {
      setState({ ...state, messages: newMess });
      if (m.id !== state.user) {
        objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 400);
      }
    }
  };

  const { tutorName, tuteeName, senderName, receiverName } = props;
  // Gửi event socket newMessage với dữ liệu là nội dung tin nhắn
  const sendnewMessage = m => {
    if (m !== '') {
      socket.emit('chat', {
        tutor: tutorName,
        tutee: tuteeName,
        sender: senderName,
        receiver: receiverName,
        message: m
      });
    }
  };

  return (
    <div className="app__content">
      <div className="chat_window">
        <ul className="messages">
          {state.messages.map(item => {
            return (
              <Message
                key={item.id}
                user={item.userId === state.user}
                message={item.message}
                name={item.sender}
              />
            );
          })}
        </ul>
        <Input sendMessage={m => sendnewMessage(m)} />
      </div>
    </div>
  );
}
