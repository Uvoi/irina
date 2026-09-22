import { useState } from 'react';
import type { Item, TestItem } from '../TestView/types';

import cls from './TestLayout.module.scss';

type TestLayoutProps = {
    testItems: TestItem[];
    testItemId: number;
    onNextClick: ()=>void;
};

export const TestLayout = ({ testItems, testItemId, onNextClick }: TestLayoutProps) =>
{
    const [currentAnswer, setCurrentAnswer] = useState<Item | undefined>();
    
    const testItem = testItems.find(
        (item) => item.id === testItemId
    );

    if (!testItem)
    {
        return null;
    }

    const handleNextClick = () =>
    {
        setCurrentAnswer(undefined);
        onNextClick();
    }
    

    return (
        <div className={cls.wrapper}>
            <div className={cls.testWrapper}>
                <div className={cls.question}>
                    {testItem.question}
                </div>

                <div className={cls.images}>
                    {testItem.group.items.map((item) => (
                        <button 
                            className={cls.imageWrapper} 
                            key={item.id} 
                            onClick={()=>setCurrentAnswer(item)}
                        >
                            <img
                                className={
                                    currentAnswer?.id === item.id
                                        ? currentAnswer.answer
                                            ? cls.selectedTrue
                                            : cls.selectedFalse
                                        : ''
                                }
                                src={item.image}
                                alt={`image-${item.id}`}
                            />
                        </button>
                    ))}
                </div>

                <div className={` ${cls.hint} ${currentAnswer?.answer ? cls.hintTrue : cls.hintFalse}`}>
                    {currentAnswer &&
                        (currentAnswer.answer
                            ? testItem.trueAnswer
                            : testItem.falseAnswer
                        )
                    }
                </div>

                <div className={cls.buttons}>
                    <button className={cls.button} disabled={!currentAnswer?.answer} onClick={handleNextClick}>
                        Далее
                    </button>
                </div>
            </div>
        </div>
    );
};