import DatePicker from 'vue2-datepicker-auto-format';
import uk from 'date-format-parse/lib/locale/uk';

const lang = {
  formatLocale: uk,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('uk', lang);

export default lang;
