import { useState, useEffect } from "react";
import "animate.css";

export function Chats({ messages, isLoading }) {
  return (
    <>
      {messages.map((m, key) => (
        <pre
          key={key}
          className={
            key % 2 === 0
              ? "second-color animate__animated  animate__backInLeft"
              : "first-color animate__animated  animate__backInRight"
          }
          onClick={() => {
            navigator.share({
              title: "share",
              text: m.message,
              url: "https://73otgx.csb.app/"
            });
          }}
        >
          {m.message}
        </pre>
      ))}
      {isLoading ? "......" : ""}
    </>
  );
}
