import type { Character } from "@/data/quiz";

type EmotionAvatarProps = {
  character: Character;
  size?: "large" | "small";
};

export function EmotionAvatar({ character, size = "large" }: EmotionAvatarProps) {
  const isSmall = size === "small";

  return (
    <div
      className={`avatar avatar-${character.shape} ${isSmall ? "avatar-small" : ""}`}
      style={
        {
          "--avatar-gradient": character.gradient,
          "--avatar-accent": character.accent,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div className="avatar-glow" />
      <div className="avatar-body">
        <div className="avatar-mark" />
        <div className="avatar-face">
          <span className="eye left-eye" />
          <span className="eye right-eye" />
          <span className="mouth" />
        </div>
        <div className="avatar-cheek left-cheek" />
        <div className="avatar-cheek right-cheek" />
      </div>
      <span className="orb orb-one" />
      <span className="orb orb-two" />
    </div>
  );
}
