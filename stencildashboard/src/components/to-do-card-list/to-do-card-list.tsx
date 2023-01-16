import { Component, h, State, Listen, Event } from '@stencil/core';
import { CardDataI } from '../../type';
import { EventEmitter, ComponentInterface, getAssetPath } from '@stencil/core/internal';

@Component({
  tag: 'to-do-card-list',
  styleUrl: 'to-do-card-list.css',
  shadow: false,
})
export class ToDoCardList implements ComponentInterface {

  cardId = 1;

  @Event() addToDoTask: EventEmitter<CardDataI>;

  @State() todos: Array<CardDataI> = [];

  @State() addTaskValue: string = "";
  @State() addTaskPrice: number = 0;

  @Listen('updateTodoTask', { capture: true })
  updateValue(event: CustomEvent<CardDataI>) {

    let updatedTask: CardDataI = event.detail;

    let todoToUpdate: Array<CardDataI> = this.todos.map((task) => {
      if (task.cardId === updatedTask.cardId) {
        return task = updatedTask;
      };
      return task;
    });

    this.todos = [...todoToUpdate];
  }


  @Listen('removeTodoTask', { capture: true })
  onRemoveToDoHandler(event: CustomEvent<CardDataI>) {
    this.todos = [...this.todos.filter((cards: CardDataI) => {
      return cards.cardId != event.detail.cardId;
    })]
  }


  onInputChangeHandler = (event: any) => {
    this.addTaskValue = event.target.value;
  }
  onInputChangeHandlerPrice = (event: any) => {
    this.addTaskPrice = event.target.value;
  }
  generateCardId = (): string => {
    return Math.random().toString(36).substring(7) + this.cardId.toString();
  }


  onButtonClickHandler = (event: any) => {
    if (this.addTaskValue.length > 0) {
      event.preventDefault();
      let cardData: CardDataI = {
        description: 'This is test description',
        cardId: this.generateCardId(),
        title: this.addTaskValue,
        price: this.addTaskPrice,
        isEditable: true,
        cardImg: getAssetPath('../../assets/images/mobile.png')
      };
      console.log(cardData.cardImg);
      this.todos = [...this.todos, cardData];
      this.cardId++;
      this.addTaskValue = "";
      this.addTaskPrice = 0;
    }

  }

  render() {
    return (
      <div>
        <div class="add-task">
          <input
            type="text"
            class="add-task-input"
            placeholder="Product"
            value={this.addTaskValue}
            name="addTask"
            onInput={(e) => this.onInputChangeHandler(e)}
          />
          <input
            type="text"
            class="add-task-input"
            placeholder="Product"
            value={this.addTaskPrice}
            name="addPrice"
            onInput={(e) => this.onInputChangeHandlerPrice(e)}
          />
          <button
            type="button"
            class="btn-success"
            onClick={(e) => this.onButtonClickHandler(e)}
          >Add Product</button>
        </div>
        <div class="row cards-container">
          {this.todos.length > 0 ? this.todos.map(cardData => {
            return <to-do-cards cardData={cardData}></to-do-cards>;
          }) : "No Product Avaliable !!"}
        </div>
      </div>
    );
  }


}
