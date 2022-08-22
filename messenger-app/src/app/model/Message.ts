import Sender from "./Sender";

export default interface Message {
    sender: Sender,
    text: string,
    conversationId: number,
    sequenceNumber: number
}