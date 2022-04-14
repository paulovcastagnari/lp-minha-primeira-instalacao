import { useState, Fragment } from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

import { useForm } from "../../hooks/formHook";
import { VALIDATOR_VALID } from "../../util/validation/validators";
import { InputTextArea } from "../inputs/InputTextArea";
import { openWhatsApp } from "../../util/other/openWhatsApp";

export const WhatsApp = () => {
  const [active, setActive] = useState<boolean>(false);
  const { formState, inputHandler } = useForm(
    {
      message: {
        value: "Quero reportar um problema.",
        isValid: true,
      },
    },
    true
  );

  return (
    <Fragment>
      <div
        className={`whatsapp__chat ${active ? "whatsapp__chat--active" : ""}`}
      >
        <div className="whatsapp__chat-header">
          <span className="whatsapp__chat-header-txt">Suporte WhatsApp</span>
          <span
            className="whatsapp__chat-header-close"
            onClick={() => {
              setActive(false);
            }}
          >
            <CloseRoundedIcon />
          </span>
        </div>
        <div className="whatsapp__chat-msg">
          <div className="whatsapp__chat-msg-inner">
            <p className="whatsapp__chat-msg-txt">
              Olá, tudo bem? Como podemos ajudar?
            </p>
          </div>
        </div>
        <form
          className="whatsapp__chat-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <InputTextArea
              id="message"
              label="Mensagem"
              title="Nos diga como podemos ajudá-lo(a)"
              inputHandler={inputHandler}
              validators={[VALIDATOR_VALID()]}
              initialValue="Quero reportar um problema."
              initialValid={true}
              noMinWidth
              noLabel
            />
          </div>
          <button
            className="btn-icon btn-icon--yellow btn-icon--large whatsapp__send"
            onClick={() => {
              openWhatsApp(
                "31992117993",
                formState.inputs?.message?.value as string
              );
            }}
          >
            <SendRoundedIcon />
          </button>
        </form>
      </div>
      <button
        className="btn btn--icon btn--icon-big btn--yellow whatsapp__btn"
        onClick={() => {
          setActive(!active);
        }}
      >
        <WhatsAppIcon />
      </button>
    </Fragment>
  );
};
