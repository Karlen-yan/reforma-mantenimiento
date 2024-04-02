export interface CardProps {
  title: string
  imageUrl: string
  content: string
}

export interface MenuMobileProps{
  isOpen: boolean;
  onClose: ()=>void;
}