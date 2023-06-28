import css from './QuestionsAnswers.module.css'
import {Layout} from "../Layout/Layout";
import svg from '../../images/symbol-defs.svg'
import {useState} from "react";

export const QuestionsAnswers = () => {
    const [openIndex, setOpenIndex] = useState(0)
const onClick=(index)=>{
if (openIndex===index){
    setOpenIndex(0)
}else {
    setOpenIndex(index)
}
}
    const content = [{
        question: 'Какова вероятность возврата средств?',
        answer: 'Процент успешных возвратов невысок. Результат зависит от многих факторов, поэтому каждый случай индивидуален . Однако хотим заметить, что мы не даем гарантии и именно поэтому мы не берем предоплату.'
    }, {
        question: 'Как я могу не сомневаться в том, что в случае неудачи вы не потребуете оплаты времени своих сотрудников?',
        answer: 'В договоре, который мы с вами подписываем перед началом сотрудничества, предметно прописано, что вы оплачиваете наши услуги лишь при успешном возврате средств. А это значит, что вы не обязаны платить предоплату или компенсацию за потраченное время.'
    }, {
        question: 'Сколько стоят услуги?',
        answer: 'Стоимость наших услуг составляет определенный % от возвращенной суммы. Как правило, мы работаем за 10%, но в некоторых ситуациях размер % может быть другим.'
    }, {
        question: 'Я заключил договор с мебельной компанией, но они ничего не делают. Можно вернуть деньги?',
        answer: 'Да, но наша компания такими ситуациями не занимается. В данном случае вам нужно найти адвоката для подачи гражданского иска. Мы занимаемся офшорами, мошенническими и иными сомнительными организациями.'
    }, {
        question: 'Вы будете возвращать деньги через суд или нет?',
        answer: 'Мы всегда стараемся вернуть деньги без судебного разбирательства. Российское и международное законодательство, по которому работают банки, предоставляют такие возможности'
    }, {
        question: 'Куда именно будет осуществлен возврат средств?',
        answer: 'Возврат средств осуществляется на те реквизиты, с которых выполнялось списание.'
    }, {
        question: 'Имеет ли значение, в каком банке открыт счет и где зарегистрирована компания?',
        answer: 'Счет может быть открыт в любом банке, как российском, так и зарубежном. Что касается компании, то это тоже не имеет особого значения.'
    }, {
        question: 'Я не проживаю в Российской Федерации и не являюсь ее гражданином, мы можем сотрудничать?',
        answer: 'Зависит от того, гражданином какой страны вы являетесь. Мы работаем также на территории Казахстана, стран СНГ.'
    }, {
        question: 'Я не нашел ответа на свой вопрос или хотел бы уточнить по предоставленным. Как это сделать?',
        answer: 'Напишите нам, воспользовавшись формой, расположенной ниже.'
    },]

    return (
        <Layout>
            <section id={'questionsAnswers'} className={css.container}>
                <h2 className={css.title}>Вопросы - ответы</h2>
                <p className={css.subTitle}> Ответы на вопросы, которые нам чаще всего задают</p>
                <ul className={css.list}>{content.map(({question, answer}, i) => {
                    return (<li key={i} className={openIndex===i+1 ? css.item + " " + css.openItem : css.item} onClick={()=>onClick(i+1)}>
                        <svg className={css.icon}>
                            <use href={svg + '#icon-swipe'}/>
                        </svg>
                        <h5 className={css.question}>{question}</h5>
                        {openIndex===i+1&&<p className={css.answer}>{answer}</p>}


                    </li>)
                })

                }</ul>
            </section>
        </Layout>
    )
}