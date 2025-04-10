import { useIntl } from 'react-intl';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const useTranslationTitle = (): ((id: string) => void) => {
  const { formatMessage } = useIntl();
  const navigation = useNavigation();

  const setNavigationTitle = (id: string): void => {
    useEffect(() => {
      navigation.setOptions({ title: formatMessage({ id }) });
    }, [navigation, id]);
  };

  return setNavigationTitle;
};

export default useTranslationTitle;
