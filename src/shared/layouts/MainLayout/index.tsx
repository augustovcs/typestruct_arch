import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import "./style.css"
import type { MainLayoutProps } from "../../../types/mainlayout";

export function MainLayout({children}: MainLayoutProps) {

    return (

        <div className="layout">
                <TopBar/>
            <div className="main"> 
                <SideBar/>
                 <main className="content">
                {children}
                </main>
            </div>
            <footer className="footer"> 
                </footer>        
        </div>
        
    )
}