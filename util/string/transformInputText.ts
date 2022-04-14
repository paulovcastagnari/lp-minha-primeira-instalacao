export const transformInputText = (
  text: string,
  transform: "UPPERCASE" | "LOWERCASE" | "NONE" = "NONE",
  filter:
    | "CHAR_ONLY"
    | "CHAR_AND_NUM"
    | "CHAR_NUM_AND_UNDER"
    | "CHAR_ONLY_NO_BLANK"
    | "CHAR_AND_NUM_NO_BLANK"
    | "CHAR_AND_UNDER_NO_BLANK"
    | "CONTENT"
    | "NONE" = "NONE"
) => {
  let transformedText = text;
  if (!!transformedText) {
    if (transform === "UPPERCASE") {
      transformedText = text.toUpperCase();
    } else if (transform === "LOWERCASE") {
      transformedText = text.toLowerCase();
    }

    if (filter === "CHAR_ONLY") {
      transformedText = transformedText.replaceAll(
        /[^A-Za-z" "çàãáâéèêíìîóôòõúùûÇÁÃÀÂÉÈÊÍÌÎÓÕÔÒÚÙÛ]/g,
        ""
      );
    } else if (filter === "CHAR_AND_NUM") {
      transformedText = transformedText.replaceAll(
        /[^A-Za-z0-9" "çàãáâéèêíìîóôòõúùûÇÁÃÀÂÉÈÊÍÌÎÓÕÔÒÚÙÛ]/g,
        ""
      );
    } else if (filter === "CHAR_NUM_AND_UNDER") {
      transformedText = transformedText.replaceAll(
        /[^A-Za-z0-9" "çàãáâéèêíìîóôòõúùûÇÁÃÀÂÉÈÊÍÌÎÓÕÔÒÚÙÛ_]/g,
        ""
      );
    } else if (filter === "CHAR_ONLY_NO_BLANK") {
      transformedText = transformedText.replaceAll(
        /[^A-Za-zçàãáâéèêíìîóôòõúùûÇÁÃÀÂÉÈÊÍÌÎÓÕÔÒÚÙÛ]/g,
        ""
      );
    } else if (filter === "CHAR_AND_NUM_NO_BLANK") {
      transformedText = transformedText.replaceAll(
        /[^A-Za-z0-9çàãáâéèêíìîóôòõúùûÇÁÃÀÂÉÈÊÍÌÎÓÕÔÒÚÙÛ]/g,
        ""
      );
    } else if (filter === "CHAR_AND_UNDER_NO_BLANK") {
      transformedText = transformedText.replaceAll(
        /[^A-Za-z_çàãáâéèêíìîóôòõúùûÇÁÃÀÂÉÈÊÍÌÎÓÕÔÒÚÙÛ]/g,
        ""
      );
    } else if (filter === "CONTENT") {
      transformedText = transformedText.replaceAll(
        /[^A-Za-z0-9-()$@%*=+;:,\._?/!" "çàãáâéèêíìîóôòõúùûÇÁÃÀÂÉÈÊÍÌÎÓÕÔÒÚÙÛ]/g,
        ""
      );
    }
  }

  return transformedText;
};
