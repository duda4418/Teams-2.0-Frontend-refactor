import { Label } from "radix-ui";
import { Avatar } from "@radix-ui/themes";
import { CircleX } from "lucide-react";

export function ContactLabel({ contact, onRemove }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "4px 10px",
        backgroundColor: "#e0f2ff",
        borderRadius: "9999px",
        fontSize: "0.75rem",
        lineHeight: "1rem",
        whiteSpace: "nowrap",
      }}
    >
      <Avatar
        size="1"
        radius="full"
        fallback={contact.initials || contact.name[0]}
        color="indigo"
        style={{ width: "20px", height: "20px" }}
      />
      <Label.Root style={{ fontSize: "0.75rem" }}>
        {contact.name}
      </Label.Root>
      <CircleX
        color="blue"
        size="16"
        style={{ cursor: "pointer" }}
        onClick={onRemove}
      />
    </div>
  );
}

export default ContactLabel;
