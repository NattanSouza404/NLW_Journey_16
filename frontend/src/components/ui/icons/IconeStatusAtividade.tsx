type Props = {
  finalizada: boolean;
};

export const IconeStatusAtividade = ({ finalizada }: Props) => {
  return finalizada ? <IconeChecked /> : <IconeNotChecked />;
}

const IconeChecked = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.50008 10L9.16675 11.6667L12.5001 8.33335M18.3334 10C18.3334 14.6024 14.6025 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6024 1.66675 10C1.66675 5.39765 5.39771 1.66669 10.0001 1.66669C14.6025 1.66669 18.3334 5.39765 18.3334 10Z"
        stroke="#BEF264"
        style={{stroke:'color(display-p3 0.7451 0.9490 0.3922)'}}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
    </svg>
  )
}

const IconeNotChecked = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41664 1.81836C9.46249 1.61597 10.5374 1.61597 11.5833 1.81836M11.5833 18.1817C10.5374 18.3841 9.46249 18.3841 8.41664 18.1817M14.6741 3.10086C15.5587 3.70022 16.3197 4.46409 16.9158 5.35086M1.8183 11.5834C1.6159 10.5375 1.6159 9.46255 1.8183 8.4167M16.8991 14.6742C16.2998 15.5588 15.5359 16.3198 14.6491 16.9159M18.1816 8.4167C18.384 9.46255 18.384 10.5375 18.1816 11.5834M3.1008 5.32586C3.70016 4.44131 4.46403 3.68026 5.3508 3.0842M5.3258 16.8992C4.44124 16.2998 3.6802 15.536 3.08414 14.6492"
        stroke="#A1A1AA"
        style={{stroke:'color(display-p3 0.6314 0.6314 0.6667)'}}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
    </svg>
  )
}
