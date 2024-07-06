export const format = (number: number) => {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export interface IClient {
    name: string,
    imageURL: string,
}
export const clientData: IClient[] = [
    { name: "client1", imageURL: "/images/client-icon1.svg" },
    { name: "client2", imageURL: "/images/client-icon2.svg" },
    { name: "client3", imageURL: "/images/client-icon3.svg" },
    { name: "client4", imageURL: "/images/client-icon4.svg" },
    { name: "client5", imageURL: "/images/client-icon5.svg" },
    { name: "client6", imageURL: "/images/client-icon6.svg" },
    { name: "client7", imageURL: "/images/client-icon3.svg" },
];