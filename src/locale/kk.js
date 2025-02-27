import DatePicker from 'vue2-datepicker-auto-format';
import kk from 'date-format-parse/lib/locale/kk';

const lang = {
  formatLocale: kk,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('kk', lang);

export default lang;
