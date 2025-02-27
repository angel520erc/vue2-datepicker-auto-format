import DatePicker from 'vue2-datepicker-auto-format';
import arDZ from 'date-format-parse/lib/locale/ar-dz';

const lang = {
  formatLocale: arDZ,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ar-dz', lang);

export default lang;
