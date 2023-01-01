import { randomUUID } from "crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface INotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt?: Date;
}


export class Notification {
  private _id: string;
  private props: INotificationProps;
  
  constructor(props: Replace<INotificationProps, { createdAt?: Date}>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }
  
  public set recipientId(value: string) {
    this.props.recipientId = value;
  }

  public get content(): Content {
    return this.props.content;
  }
  
  public set content(value: Content) {
    this.props.content = value;
  }

  public get category(): string {
    return this.props.category;
  }
  
  public set category(value: string) {
    this.props.category = value;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  
  public set readAt(value: Date | null | undefined) {
    this.props.readAt = value;
  }
  
  public get canceledAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date(); 
  }

  public get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
}
