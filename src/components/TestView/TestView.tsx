import { useState } from 'react';
import { TestLayout } from '../TestLayout/TestLlayout';
import { TEST_ITEMS } from './const';
import gif from '@/assets/cats.gif'
import cls from './TestView.module.scss';

export const TestView = () =>
{
    const [testIndex, setTestIndex] = useState(0);

    const nextTest = () =>
    {
        setTestIndex((prev) => prev + 1);
    };

    const handleReloadClick = () =>
    {
        window.location.reload();
    }

    const currentTest = TEST_ITEMS[testIndex];

    if (!currentTest)
    {
        return(
            <div className={cls.totalWrapper}>
                <p>Тест завершен!</p>
                <img src={gif} alt="" />
                <span>{`По результатам теста Вы на 10000008327496314092392167321% котёнок <3`}</span>
                <button className={cls.button} onClick={handleReloadClick}>Пройти заново</button>
            </div>
        ) 
    }

    return (
        <div className={cls.wrapper}>
            <TestLayout
                testItems={TEST_ITEMS}
                testItemId={currentTest.id}
                onNextClick={nextTest}
            />
        </div>
    );
};