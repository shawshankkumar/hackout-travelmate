export default function CompanyLogo({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 w-fit ${className}`}>
      <div>
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.64795"
            y="1.95264"
            width="17.2928"
            height="17.2928"
            rx="2.07273"
            fill="#121212"
          />
          <rect
            x="1.02716"
            y="0.331723"
            width="16.7746"
            height="16.7746"
            rx="1.81364"
            fill="#EFCB59"
            stroke="#121212"
            strokeWidth="0.518182"
          />
          <path
            d="M13.317 11.9562L10.6398 14.7523C10.5343 14.8625 10.4091 14.9499 10.2712 15.0096C10.1333 15.0692 9.98553 15.0999 9.83629 15.0999C9.68705 15.0999 9.53927 15.0692 9.40139 15.0096C9.26352 14.9499 9.13826 14.8625 9.03276 14.7523L6.35559 11.9562C5.89845 11.479 5.53582 10.9124 5.2884 10.2888C5.04097 9.66522 4.91361 8.99687 4.91357 8.32189C4.91354 7.64692 5.04083 6.97854 5.28819 6.35493C5.53555 5.73133 5.89812 5.16469 6.35521 4.68739C6.81231 4.21008 7.35496 3.83145 7.9522 3.57312C8.54944 3.31478 9.18956 3.1818 9.83602 3.18176C10.4825 3.18173 11.1226 3.31464 11.7199 3.5729C12.3171 3.83117 12.8598 4.20974 13.317 4.68699C13.7742 5.16427 14.1368 5.73091 14.3843 6.35454C14.6317 6.97817 14.759 7.64659 14.759 8.32161C14.759 8.99663 14.6317 9.66505 14.3843 10.2887C14.1368 10.9123 13.7742 11.4789 13.317 11.9562ZM12.5142 5.52596C11.804 4.78441 10.8407 4.36701 9.83629 4.36701C8.83187 4.36701 7.86859 4.78362 7.15837 5.52517C6.44814 6.26673 6.04913 7.2725 6.04913 8.32122C6.04913 9.36994 6.44814 10.3757 7.15837 11.1173L9.83629 13.9125L12.5142 11.118C12.8659 10.7509 13.145 10.315 13.3353 9.83526C13.5257 9.3555 13.6237 8.8413 13.6237 8.32201C13.6237 7.80271 13.5257 7.28851 13.3353 6.80876C13.145 6.32901 12.8659 5.89311 12.5142 5.52596ZM9.83629 9.90348C9.63458 9.90824 9.434 9.87088 9.24631 9.79359C9.05862 9.7163 8.88761 9.60063 8.74333 9.45339C8.59904 9.30614 8.48439 9.13028 8.40609 8.93614C8.32779 8.74199 8.28743 8.53346 8.28738 8.32281C8.28733 8.11215 8.32759 7.9036 8.40579 7.70941C8.484 7.51522 8.59857 7.33931 8.74279 7.19199C8.887 7.04466 9.05795 6.92891 9.2456 6.85152C9.43326 6.77413 9.63382 6.73667 9.83553 6.74132C10.2313 6.75046 10.6079 6.921 10.8847 7.21643C11.1615 7.51186 11.3166 7.90871 11.3167 8.32202C11.3168 8.73532 11.1619 9.13225 10.8852 9.42783C10.6086 9.7234 10.232 9.89413 9.83629 9.90348Z"
            fill="black"
          />
        </svg>
      </div>
      <span className=" font-bold">travelmate</span>
    </div>
  );
}