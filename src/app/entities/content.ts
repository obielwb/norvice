export class Content {
  private readonly content: string; 

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 255;
  }

  constructor(content: string) {
    const isContentLenghtValid = this.validateContentLength(content);

    if (!isContentLenghtValid) {
      throw new Error('Content length must be between 5 and 255 characters');
    }

    this.content = content;
  }
}