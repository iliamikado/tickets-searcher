import { Input } from "@/components/Input/input";
import { Selector } from "@/components/Selector/selector";
import { TicketCard } from "@/components/TicketCard/ticketCard";

export default function Home() {
    return (
        <>
            <Selector placeholder="Выберете жанр" items={['Не выбран', 'dede', 'asdas']}/>
            <Selector placeholder="Выберете жанр" items={['Не выбран', 'dede', 'asdas']}/>
            <Input placeholder="Название"/>
        </>
    );
}