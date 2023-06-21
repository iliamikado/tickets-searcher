import { Footer } from "@/components/Footer/footer";
import { Header } from "@/components/Header/header";
import { Input } from "@/components/Input/input";
import { Selector } from "@/components/Selector/selector";
import { TicketCard } from "@/components/TicketCard/ticketCard";

export default function Home() {
    return (
        <>
            <Header ticketsCount={30}/>
            <div style={{marginTop: 200}}>
                <Selector placeholder="Выберете жанр" items={['Не выбран', 'dede', 'asdas']}/>
                <Selector placeholder="Выберете жанр" items={['Не выбран', 'dede', 'asdas']}/>
                <Input placeholder="Название"/>
            </div>
            <Footer/>
        </>
    );
}