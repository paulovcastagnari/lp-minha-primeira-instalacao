import Image from "next/image";

interface AvatarProps {
  img: string;
  name: string;
  surname: string;
  small?: boolean;
  comment?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const { img, name, surname, small, comment } = props;

  return (
    <div
      className={`avatar ${small ? "avatar--small" : ""} ${
        comment ? "comment__avatar" : ""
      } ${!!img ? "avatar--has-img" : ""}`}
    >
      {!!img ? (
        <img src={img} alt="Avatar" className="avatar__item avatar__img" />
      ) : (
        <div className="avatar__item avatar__placeholder ">
          {name.substr(0, 1) + surname.substr(0, 1)}
        </div>
      )}
    </div>
  );
};
