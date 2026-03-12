export default function Header({ title, subTitle }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-[22px] sm:text-[24px] lg:text-[30px] leading-[32px] sm:leading-[34px] lg:leading-[36px] text-grayDark">
        {title}
      </h1>

      <p className="font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[23px] lg:leading-[24px] text-textMuted">
        {subTitle}
      </p>
    </div>
  );
}
