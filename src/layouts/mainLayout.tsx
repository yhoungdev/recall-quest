import { FC, ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode
}
const style = {
    backgroundImage: "url('/images/default_bg.svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

const MainLayout: FC<MainLayoutProps> = ({children}: MainLayoutProps) => {
    return <div className="h-[100vh] w-full xl:max-w-[500px] mx-auto " 
      style={style}>
        {children}
    </div>
}
export default MainLayout;