# Тестовое задание. React + TypeScript + Vite

В качестве способа реализации задачи выбран React + TS т.к. в вакансии требовался разработчик на React.

## Зание

[Макет в Figma](https://www.figma.com/design/0T1OVhpMyCrK9B3GsbFj7P/Untitled?node-id=0-1&p=f&t=4Df9nxsI0n05Xxs1-0)

Респонсивная вёрстка от 320px (элементы в столбец) до 1200px (элементы в строку), на 425px (размер макета) должен выглядеть идентично мекету.

Частично заполненный прогрессбар инвертирует текст под заполненной частью.

Можно выбрать любой удобный инструментарий: сверстать это на голом html/css/js, на ts/react, либо на чём-то другом. Цель задания: получить качественную вёрстку.

<div align="center" >
  <img src="https://maxrmnk.github.io/test-progressbar/model.jpg" alt="" width="300" target="_blank">
</div>

Также был предоставлен образец поведения прогресс-бара:

<div align="center" >
  <img src="https://maxrmnk.github.io/test-progressbar/gif-preview.gif" alt="" width="300" target="_blank">
</div>

### Напутственное сообщение:

На первом этапе мы проверяем исключительно способность верстать и только. Абсолютно не важно как будет вести себя приложение, но оно должно выглядеть как выглядит макет и предписывает ТЗ. Input-поля содержат значения, согласно макету. Прогрессбар можно статически зафиксировать на значении 65%.

## Решение

<!-- <div align="center">
  <img src="https://maxrmnk.github.io/test-progressbar/demo1.jpg" alt="" width="200" target="_blank">

  <img src="https://maxrmnk.github.io/test-progressbar/demo2.jpg" alt="" width="400" target="_blank">
</div> -->

**Демо:** https://maxrmnk.github.io/test-progressbar/

Расширяющиеся поля ввода сделаны двумя разными способами:

- Первый `input` – с помощью вычисления ширины по размеру содержимого. Так как символы разной ширины на больших числах нужно тщательно подобирать их "средний" размер для расчета размера поля.
- Второй `input` – с помощью скрытой подложки в виде `span`, в нее дублируется значение `input` расширяя родительский блок и отодвигая блок с обозначением валюты. Этот способ мне нравится больше, т.к. реализация проще и меньше шансов ошибиться.

В обеих случаях применяется простая "валидация" (разрешено вводить только цифры) и ограничение на количество знаков, чтобы они не скрывалисьза пределами полей при минимальном размере экрана.

В поисках способа создания прогресс-бара попробовал около десятка вариантов, но всегда что-то шло не так – мешали закругленные углы сегментов, не центрировались или не меняли цвет цифры слоя "прогресса" и др. В результате все-таки, нашел, как мне кажется, оптимальный способ – перекрытие фона с помощью `clip-path`.

**Дополнение к заданию:** Сделал возможность деления прогресс-бара на разное количество сегментов.

<!--
Тестовое задание для "AWX Solutions FZ-LLC": https://hh.ru/employer/9376786
на вакансию: https://hh.ru/vacancy/116157366
-->
