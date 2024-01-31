import { PageContainer } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from 'umi';
import styles from './index.less';

const HomePage: React.FC = () => {
  const intl = useIntl();
  const msg = intl.formatMessage({
    id: 'title',
  });
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <h1>{msg}</h1>
        <h1>{intl.formatMessage({ id: 'title' })}</h1>
        <h1>
          <FormattedMessage id="title" />
        </h1>
      </div>
    </PageContainer>
  );
};

export default HomePage;
