interface ParagraphProps {
    text: string;
    className?: string;
    onClick?: () => void
}
const Paragraph : React.FC<ParagraphProps> = ({ text, className,onClick = () => {} }) => {
    return <p className={className} onClick={onClick}>{text}</p>;
};
export default Paragraph;