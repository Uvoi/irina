import type { TestItem } from "./types";
import pic01 from '@/assets/01.jpg'
import pic02 from '@/assets/02.jpg'
import pic03 from '@/assets/03.jpg'
import pic1 from '@/assets/1.jpg'
import pic2 from '@/assets/2.jpg'
import pic3 from '@/assets/3.jpg'
import cat1 from '@/assets/cat1.jpg'
import cat2 from '@/assets/cat2.jpg'
import cat3 from '@/assets/cat3.jpg'
import cat4 from '@/assets/cat4.jpg'
import cat5 from '@/assets/cat5.jpg'
import cat6 from '@/assets/cat6.jpg'
import b1 from '@/assets/b1.jpg'
import b2 from '@/assets/b2.jpg'
import b3 from '@/assets/b3.jpg'
import cats from '@/assets/cats.jpg'


export const TEST_ITEMS: TestItem[] = 
[
    {
        id: 1,
        group: {
            items: [
                {
                    id: 1,
                    image: cat2,
                    answer: true
                },
                {
                    id: 2,
                    image: cat1,
                    answer: false
                },
                {
                    id: 3,
                    image: pic01,
                    answer: false
                },
                                {
                    id: 4,
                    image: cat3,
                    answer: false
                }
            ]
        },
        question: 'Какая картинка лишняя?',
        trueAnswer: 'Правильно! Только этот котик спит.',
        falseAnswer: 'Неправильно, подумай еще!',
    },
    {
        id: 2,
        group: {
            items: [
                {
                    id: 1,
                    image: b1,
                    answer: false
                },
                {
                    id: 2,
                    image: pic02,
                    answer: false
                },
                {
                    id: 3,
                    image: b2,
                    answer: false
                },
                                {
                    id: 4,
                    image: b3,
                    answer: true
                }
            ]
        },
        question: 'А тут?',
        trueAnswer: 'Правильно! Только этот зайчик кушает.',
        falseAnswer: 'Неправильно, еще пытайся!',
    },
    {
        id: 3,
        group: {
            items: [
                {
                    id: 1,
                    image: cat4,
                    answer: false
                },
                {
                    id: 2,
                    image: cat5,
                    answer: false
                },
                {
                    id: 3,
                    image: cat6,
                    answer: false
                },
                                {
                    id: 4,
                    image: pic03,
                    answer: true
                }
            ]
        },
        question: 'Теперь выбери самого милого котика.',
        trueAnswer: 'Правильно! Это самый милый котик во вселенной.',
        falseAnswer: 'Неправильно, этот котик милый, но есть милее.',
    },
    {
        id: 4,
        group: {
            items: [
                {
                    id: 1,
                    image: pic1,
                    answer: true
                },
                {
                    id: 2,
                    image: cats,
                    answer: false
                },
                {
                    id: 3,
                    image: pic2,
                    answer: true
                },
                                {
                    id: 4,
                    image: pic3,
                    answer: true
                }
            ]
        },
        question: 'Теперь пары котиков.',
        trueAnswer: 'Правильно! Это самые милые котики ever.',
        falseAnswer: 'Неправильно, эти котики милые, но есть милее.',
    }
]
