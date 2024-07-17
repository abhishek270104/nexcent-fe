
export const format = (number: number) => {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export interface IClient {
    name: string,
    imageURL: string,
}
interface ICarousel {
    id: number,
    component: React.ReactElement,
    url: string,
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
export const carouselSlides: ICarousel[] = [
    {
        id: 1,
        component: <div className='slide mx-auto mb-10'>
            <div className=''>
                <h2 className="heading">Lessons and insights 1</h2>
                <h2 className="duration">from 8 years</h2>
                <p className="my-5">Where to grow your business as a photographer: site or social media?</p>
                <button className="greenButton">Register</button>
            </div>
            <div>
                <Image src="/images/carousel-template-image.svg" alt="carousel_image" />
            </div>
        </div> ,
        url: "",
    },
    {
        id: 2,
        component: <div className='slide mx-auto mb-10'>
            <div>
                <Image src="/images/carousel-template-image.svg" alt="carousel_image" />
            </div>
            <div className=''>
                <h2 className="heading">Lessons and insights 2</h2>
                <h2 className="duration">from 16 years</h2>
                <p className="my-5">Where to grow your business as a photographer: site or social media?</p>
                <button className="greenButton">Register</button>
            </div>
        </div>,
        url: "",
    },
    {
        id: 3,
        component: <div className='slide mx-auto mb-10'>
            <div className=''>
                <h2 className="heading">Lessons and insights 3</h2>
                <h2 className="duration">from 4 years</h2>
                <p className="my-5">Where to grow your business as a photographer: site or social media?</p>
                <button className="greenButton">Register</button>
            </div>
            <div>
                <Image src="/images/carousel-template-image.svg" alt="carousel_image" />
            </div>
        </div>,
        url: "",
    },
]