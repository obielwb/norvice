import { Content } from "./content";

export interface INotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt?: Date;
}


export class Notification {
  private props: INotificationProps;
  
  constructor(props: INotificationProps) {
    this.props = props;
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

  public get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
}
