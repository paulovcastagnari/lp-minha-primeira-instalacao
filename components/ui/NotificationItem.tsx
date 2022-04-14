interface NotificationItemProps {
  title: string;
  content: string;
  date: string;
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { title, content, date } = props;

  return (
    <div className="dropdown__item dropdown__item-not">
      <span className="dropdown__item-not-title">{title}</span>
      <p className="dropdown__item-not-content">{content}</p>
      <span className="dropdown__item-not-date">{date}</span>
    </div>
  );
};
