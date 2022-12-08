import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaVideo,
  FaRocketchat,
  FaUserFriends,
  FaInfoCircle,
} from "react-icons/fa";
import FriendInfo from "./FriendInfo";
import Message from "./Message";
import MessageSend from "./MessageSend";

const RightSide = (props) => {
  const {
    currentfriend,
    inputHendle,
    newMessage,
    sendMessage,
    message,
    scrollRef,
    emojiSend,
    ImageSend,
    activeUser,
    typingMessage,
    showFriend,
  } = props;

  const [showFriendInfo, setShowFriendInfo] = useState(false);
  const showFriendInfoHandler = () => {
    setShowFriendInfo(true);
    console.log("show freind info");
  };

  return (
    <div className="col-9 col-md-12 ">
      <div className="right-side">
        <input type="checkbox" id="dot" />
        <div className="row">
          <div className=" col-12 col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img src={`./image/${currentfriend.image}`} alt="" />

                    {activeUser &&
                    activeUser.length > 0 &&
                    activeUser.some((u) => u.userId === currentfriend._id) ? (
                      <div className="active-icon"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="name">
                    <h3>{currentfriend.userName} </h3>
                  </div>
                </div>

                <div className="icons">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>

                  <div className="icon">
                    <FaVideo />
                  </div>

                  <div className="icon">
                    <label htmlFor="dot">
                      {" "}
                      <FaRocketchat />{" "}
                    </label>
                  </div>

                  <div
                    className="icon d-hide-items"
                    onClick={showFriendInfoHandler}
                  >
                    <label htmlFor="dot">
                      {" "}
                      <FaInfoCircle />{" "}
                    </label>
                  </div>

                  <div className="icon d-hide-items" onClick={showFriend}>
                    <label htmlFor="dot">
                      {" "}
                      <FaUserFriends />{" "}
                    </label>
                  </div>
                </div>
              </div>

              <Message
                message={message}
                currentfriend={currentfriend}
                scrollRef={scrollRef}
                typingMessage={typingMessage}
              />

              <MessageSend
                inputHendle={inputHendle}
                newMessage={newMessage}
                sendMessage={sendMessage}
                emojiSend={emojiSend}
                ImageSend={ImageSend}
              />
            </div>
          </div>

          <div
            className={
              showFriendInfo
                ? " show-friendInfoBoard col-4 "
                : "friendInfoBoard col-4 "
            }
          >
            <FriendInfo
              message={message}
              currentfriend={currentfriend}
              activeUser={activeUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
