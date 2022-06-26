type SubscriberName = string;

export type GetSubscriberName = () => SubscriberName;

export type SetSubscriberName = (name: SubscriberName) => void;

export type SubscriberNameContextType = {
  getSubscriberName: GetSubscriberName;
  setSubscriberName: SetSubscriberName;
};
