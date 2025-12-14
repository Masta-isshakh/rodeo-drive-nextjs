"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import "./contact.css";
import { useTranslation } from "react-i18next";

const client = generateClient();

export default function ContactPageClient() {
  const [msg, setMsg] = useState("");
  type Message = { id: string; content: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [_loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const result = await (client as any).models.Todo.list();
        setMessages(result.data);
      } catch (err) {
        console.error("Error loading messages:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  const handleSend = async () => {
    if (!msg.trim()) return;

    try {
      const newMessage = await (client as any).models.Todo.create({
        content: msg,
      });

      setMessages((prev) => [...prev, newMessage.data]);
      setMsg("");
    } catch (err) {
      console.error("Error creating message:", err);
    }
  };

  return (
    <div className="contact-page">
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.subtitle")}</p>

      <div className="contact-form">
        <textarea
          placeholder={t("contact.message")}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button onClick={handleSend}>{t("contact.send")}</button>
      </div>

      <div className="contact-options">
        <a
          href="https://wa.me/97455708226"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          {t("contact.whatsapp")}
        </a>
        <a href="tel:+97455708226" className="call-btn">
          {t("contact.call")}
        </a>
      </div>

      <div className="chat-box">
        <h3>{t("admin.title")}</h3>
        {messages.length === 0 ? (
          <div>{t("admin.no_messages")}</div>
        ) : (
          messages.map((m: any) => (
            <div className="chat-message" key={m.id || Math.random()}>
              {m.content}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
