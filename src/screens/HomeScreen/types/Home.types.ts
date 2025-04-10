export interface HomeProps {
  formatMessage: (messageDescriptor: { id: string }) => string;
  navigation: {
    navigate: (screenName: string) => void;
  };
}
