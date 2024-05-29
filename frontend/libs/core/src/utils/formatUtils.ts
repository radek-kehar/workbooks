import dayjs, { Dayjs } from 'dayjs';

export class FormatUtils {
  /**
   * Formats a Dayjs instance as a string in the 'DD.MM.YYYY' format.
   */
  static formatDate(value: Dayjs | null): string | null {
    if (value == null || !dayjs.isDayjs(value)) {
      return value;
    }
    return value.format('DD.MM.YYYY');
  }
}
