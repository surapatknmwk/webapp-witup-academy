import type { MonthData } from '../types/calendar'

// Mock data พ.ศ. 2569–2571 | status: A=เรียนแล้ว S=กำหนดการ C=ยกเลิก
// วันที่มีหลาย activity = นักเรียนหลายคนในวันเดียว คนละเวลา

const S1 = { studentCode: 'ST0001', name: 'น้องดรีม', room: 'https://meet.google.com/abc-defg-hij' }
const S2 = { studentCode: 'ST0002', name: 'น้องมิ้น',  room: 'https://meet.google.com/klm-nopq-rst' }
const S3 = { studentCode: 'ST0003', name: 'น้องพลอย', room: 'https://meet.google.com/uvw-xyz1-234' }
const S4 = { studentCode: 'ST0004', name: 'น้องต้น',   room: 'https://meet.google.com/567-89ab-cde' }
const S5 = { studentCode: 'ST0005', name: 'น้องเบล',   room: 'https://meet.google.com/fgh-ijkl-mno' }

export const calendarData: MonthData[] = [

  // ══════════════════════ พ.ศ. 2569 (2026) ══════════════════════

  {
    year: 2569, month: 1,
    days: [
      { day: 1, weekDay: 'Th', holiday: 'วันขึ้นปีใหม่', activity: [] },
      {
        day: 5, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 กฎของนิวตัน', content: 'กฎข้อที่ 1 และ 2 ของนิวตัน', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '1' } },
          { no: 2, topic: 'บทที่ 1 แคลคูลัส', content: 'ลิมิตและความต่อเนื่องของฟังก์ชัน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '1' } },
        ]
      },
      {
        day: 9, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 พันธะเคมี', content: 'พันธะโคเวเลนต์และพันธะไอออนิก', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S3, round: '1' } },
          { no: 2, topic: 'บทที่ 1 เซลล์วิทยา', content: 'โครงสร้างและหน้าที่ของออร์แกเนลล์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S4, round: '1' } },
        ]
      },
      {
        day: 12, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 กฎของนิวตัน', content: 'กฎข้อที่ 3 แรงปฏิกิริยา', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '2' } },
          { no: 2, topic: 'บทที่ 1 แคลคูลัส', content: 'อนุพันธ์เบื้องต้น', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '2' } },
          { no: 3, topic: 'บทที่ 1 พันธะเคมี', content: 'ขั้วของพันธะและโมเลกุล', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S3, round: '2' } },
        ]
      },
      {
        day: 16, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 2 งานและพลังงาน', content: 'สูตรงาน พลังงานศักย์ จลน์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '3' } },
          { no: 2, topic: 'บทที่ 1 เซลล์วิทยา', content: 'การแบ่งเซลล์แบบไมโทซิส', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S4, round: '2' } },
        ]
      },
      {
        day: 19, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 2 งานและพลังงาน', content: 'กฎการอนุรักษ์พลังงาน', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '4' } },
          { no: 2, topic: 'บทที่ 2 อนุพันธ์', content: 'กฎลูกโซ่และอนุพันธ์รูปแบบต่างๆ', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '3' } },
          { no: 3, topic: 'บทที่ 2 กรด-เบส', content: 'นิยามของบรอนสเตด-ลาวรี', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S3, round: '3' } },
        ]
      },
      {
        day: 23, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ไฟฟ้าสถิต', content: 'ประจุไฟฟ้าและกฎของคูลอมบ์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '5' } },
          { no: 2, topic: 'บทที่ 2 พันธุกรรม', content: 'กฎของเมนเดลและการถ่ายทอดลักษณะ', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S4, round: '3' } },
        ]
      },
      {
        day: 26, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ไฟฟ้าสถิต', content: 'สนามไฟฟ้าและศักย์ไฟฟ้า', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '6' } },
          { no: 2, topic: 'บทที่ 2 อนุพันธ์', content: 'การหาค่าสุดขีดและจุดวิกฤต', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '4' } },
          { no: 3, topic: 'บทที่ 2 กรด-เบส', content: 'การคำนวณ pH ของสารละลาย', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S3, round: '4' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 2,
    days: [
      {
        day: 2, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 4 ไฟฟ้ากระแส', content: 'กระแสไฟฟ้า ความต้านทาน กฎของโอห์ม', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '7' } },
          { no: 2, topic: 'บทที่ 3 อินทิกรัล', content: 'อินทิกรัลไม่จำกัดขอบเขต', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '5' } },
        ]
      },
      {
        day: 6, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 4 ไฟฟ้ากระแส', content: 'วงจรไฟฟ้าและกฎของเคอร์ชอฟฟ์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '8' } },
          { no: 2, topic: 'บทที่ 3 เคมีอินทรีย์', content: 'ไฮโดรคาร์บอนและกลุ่มฟังก์ชัน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S3, round: '5' } },
          { no: 3, topic: 'บทที่ 2 พันธุกรรม', content: 'DNA และการสังเคราะห์โปรตีน', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S4, round: '4' } },
        ]
      },
      {
        day: 9, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 4 ไฟฟ้ากระแส', content: 'ตัวเก็บประจุและวงจร RC', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '9' } },
          { no: 2, topic: 'บทที่ 3 อินทิกรัล', content: 'อินทิกรัลจำกัดขอบเขตและพื้นที่', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '6' } },
        ]
      },
      {
        day: 13, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 แม่เหล็กไฟฟ้า', content: 'สนามแม่เหล็กและแรงลอเรนซ์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '10' } },
          { no: 2, topic: 'บทที่ 3 เคมีอินทรีย์', content: 'แอลกอฮอล์และกรดอินทรีย์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S3, round: '6' } },
          { no: 3, topic: 'บทที่ 3 พันธุกรรมประชากร', content: 'กฎของฮาร์ดี-ไวน์เบิร์ก', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S4, round: '5' } },
        ]
      },
      {
        day: 16, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 แม่เหล็กไฟฟ้า', content: 'การเหนี่ยวนำแม่เหล็กไฟฟ้า', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '11' } },
          { no: 2, topic: 'บทที่ 4 สมการเชิงอนุพันธ์', content: 'สมการเชิงอนุพันธ์อันดับหนึ่ง', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '7' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 3,
    days: [
      {
        day: 2, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 คลื่น', content: 'สมบัติของคลื่นกล', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '12' } },
          { no: 2, topic: 'บทที่ 4 สมการเชิงอนุพันธ์', content: 'สมการเชิงอนุพันธ์อันดับสอง', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '8' } },
          { no: 3, topic: 'บทที่ 4 เคมีวิเคราะห์', content: 'การไทเทรตกรด-เบส', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S3, round: '7' } },
        ]
      },
      {
        day: 6, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 คลื่น', content: 'การซ้อนทับและการสั่นพ้อง', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '13' } },
          { no: 2, topic: 'บทที่ 4 ระบบนิเวศ', content: 'การเปลี่ยนแปลงแทนที่และสมดุล', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S4, round: '6' } },
        ]
      },
      {
        day: 9, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 คลื่น', content: 'เสียงและดอปเปลอร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '14' } },
          { no: 2, topic: 'บทที่ 5 ทฤษฎีจำนวน', content: 'จำนวนเฉพาะและการหาร ม.ร.น.', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '9' } },
          { no: 3, topic: 'บทที่ 4 เคมีวิเคราะห์', content: 'การไทเทรตรีดอกซ์', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S3, round: '8' } },
        ]
      },
      {
        day: 16, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 6 แสงเชิงเรขาคณิต', content: 'การสะท้อนและการหักเหของแสง', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '15' } },
          { no: 2, topic: 'บทที่ 5 ทฤษฎีจำนวน', content: 'ทฤษฎีบทของแฟร์มาและยูกเลอร์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '10' } },
        ]
      },
      {
        day: 20, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 6 แสงเชิงเรขาคณิต', content: 'เลนส์บางและกระจก', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '16' } },
          { no: 2, topic: 'บทที่ 4 วิวัฒนาการ', content: 'หลักฐานและกลไกวิวัฒนาการ', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S4, round: '7' } },
          { no: 3, topic: 'บทที่ 5 พอลิเมอร์', content: 'พลาสติกและยางสังเคราะห์', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S3, round: '9' } },
        ]
      },
      {
        day: 23, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 6 แสงเชิงเรขาคณิต', content: 'กล้องถ่ายรูปและกล้องโทรทรรศน์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '17' } },
          { no: 2, topic: 'บทที่ 6 สมการเมทริกซ์', content: 'เมทริกซ์และดีเทอร์มิแนนต์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '11' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 4,
    days: [
      { day: 6, weekDay: 'Mo', holiday: 'วันจักรี', activity: [] },
      {
        day: 7, weekDay: 'Tu', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 6 แสงเชิงเรขาคณิต', content: 'ทบทวนก่อนสอบ', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', note: 'เตรียมสอบปลายภาค', student: { ...S1, round: '18' } },
          { no: 2, topic: 'บทที่ 6 สมการเมทริกซ์', content: 'ทบทวนก่อนสอบ', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', note: 'เตรียมสอบปลายภาค', student: { ...S2, round: '12' } },
          { no: 3, topic: 'บทที่ 5 พอลิเมอร์', content: 'ทบทวนเคมีอินทรีย์', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'A', student: { ...S3, round: '10' } },
        ]
      },
      { day: 13, weekDay: 'Mo', holiday: 'วันสงกรานต์', activity: [] },
      { day: 14, weekDay: 'Tu', holiday: 'วันสงกรานต์', activity: [] },
      { day: 15, weekDay: 'We', holiday: 'วันสงกรานต์', activity: [] },
      {
        day: 20, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 7 ฟิสิกส์อะตอม', content: 'แบบจำลองอะตอมของโบร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '19' } },
          { no: 2, topic: 'บทที่ 4 วิวัฒนาการ', content: 'การคัดเลือกโดยธรรมชาติ', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S4, round: '8' } },
        ]
      },
      {
        day: 24, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 7 ฟิสิกส์อะตอม', content: 'สเปกตรัมและการเปล่งแสง', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S1, round: '20' } },
          { no: 2, topic: 'บทที่ 7 สมการเมทริกซ์', content: 'การหาค่าไอเกนและเวกเตอร์ไอเกน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S2, round: '13' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 5,
    days: [
      { day: 1, weekDay: 'Fr', holiday: 'วันแรงงานแห่งชาติ', activity: [
        { no: 1, topic: 'บทที่ 3 ไฟฟ้า', content: 'ไฟฟ้า AC และ DC', note: '', timeStart: '11:00', timeEnd: '12:00', timeHrs: '1', status: 'A', student: { ...S1, round: '21' } }
      ] },
      {
        day: 2, weekDay: 'Sa', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 สถิติ', content: 'การแจกแจงความน่าจะเป็น', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'A', student: { ...S2, round: '14' } },
          { no: 2, topic: 'บทที่ 5 ชีววิทยา', content: 'ระบบนิเวศและความหลากหลาย', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'A', student: { ...S5, round: '1' } },
        ]
      },
      { day: 4, weekDay: 'Mo', holiday: 'วันฉัตรมงคล', activity: [] },
      {
        day: 7, weekDay: 'Th', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 7 ฟิสิกส์อะตอม', content: 'รังสีแกมมาและนิวเคลียร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '22' } },
          { no: 2, topic: 'บทที่ 1 สถิติ', content: 'การทดสอบสมมติฐาน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '15' } },
          { no: 3, topic: 'บทที่ 6 เคมีไฟฟ้า', content: 'เซลล์กัลวานิกและอิเล็กโทรไลต์', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '11' } },
        ]
      },
      {
        day: 8, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'ทบทวนบทที่ 1-7', content: 'สรุปฟิสิกส์ก่อนสอบ', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '23' } },
          { no: 2, topic: 'บทที่ 4 วิวัฒนาการ', content: 'พันธุศาสตร์ประชากร', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '9' } },
        ]
      },
      {
        day: 11, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'เตรียมสอบ PAT2', content: 'ฟิสิกส์ข้อสอบย้อนหลัง', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '24' } },
          { no: 2, topic: 'เตรียมสอบ PAT1', content: 'คณิตศาสตร์ข้อสอบย้อนหลัง', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '16' } },
          { no: 3, topic: 'เตรียมสอบ PAT2', content: 'เคมีข้อสอบย้อนหลัง', timeStart: '15:00', timeEnd: '16:00', timeHrs: '2', status: 'S', student: { ...S3, round: '12' } },
          { no: 4, topic: 'เตรียมสอบ PAT2', content: 'เคมีข้อสอบย้อนหลัง', timeStart: '17:00', timeEnd: '18:00', timeHrs: '2', status: 'S', student: { ...S3, round: '12' } },
          { no: 5, topic: 'เตรียมสอบ PAT2', content: 'เคมีข้อสอบย้อนหลัง', timeStart: '18:00', timeEnd: '19:00', timeHrs: '2', status: 'S', student: { ...S3, round: '12' } },
          { no: 6, topic: 'เตรียมสอบ PAT2', content: 'เคมีข้อสอบย้อนหลัง', timeStart: '19:00', timeEnd: '20:00', timeHrs: '2', status: 'S', student: { ...S3, round: '12' } },
          { no: 7, topic: 'เตรียมสอบ PAT2', content: 'เคมีข้อสอบย้อนหลัง', timeStart: '20:00', timeEnd: '21:00', timeHrs: '2', status: 'S', student: { ...S3, round: '12' } },
        ]
      },
      {
        day: 14, weekDay: 'Th', holiday: null, activity: [
          { no: 1, topic: 'สอบ Mock PAT', content: 'ฟิสิกส์จำลอง', timeStart: '09:00', timeEnd: '12:00', timeHrs: '3', status: 'S', student: { ...S1, round: '25' } },
          { no: 2, topic: 'สอบ Mock PAT', content: 'คณิตศาสตร์จำลอง', timeStart: '13:00', timeEnd: '16:00', timeHrs: '3', status: 'S', student: { ...S2, round: '17' } },
        ]
      },
      {
        day: 15, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'สอบ Mock PAT', content: 'เคมีจำลอง', timeStart: '10:00', timeEnd: '13:00', timeHrs: '3', status: 'S', student: { ...S3, round: '13' } },
          { no: 2, topic: 'สอบ Mock PAT', content: 'ชีววิทยาจำลอง', timeStart: '14:00', timeEnd: '17:00', timeHrs: '3', status: 'S', student: { ...S4, round: '10' } },
        ]
      },
      {
        day: 18, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'เฉลยข้อสอบ Mock', content: 'ฟิสิกส์และเทคนิคทำข้อสอบ', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '26' } },
          { no: 2, topic: 'เฉลยข้อสอบ Mock', content: 'คณิตศาสตร์และเทคนิค', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '18' } },
        ]
      },
      { day: 22, weekDay: 'Fr', holiday: 'วันวิสาขบูชา', activity: [] },
      {
        day: 25, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'เตรียมสอบรอบสุดท้าย', content: 'ฟิสิกส์สรุปจุดสำคัญ', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '27' } },
          { no: 2, topic: 'เตรียมสอบรอบสุดท้าย', content: 'เคมีสรุปจุดสำคัญ', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '14' } },
          { no: 3, topic: 'เตรียมสอบรอบสุดท้าย', content: 'ชีววิทยาสรุปจุดสำคัญ', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '11' } },
        ]
      },
      {
        day: 29, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'วางแผนปีการศึกษาใหม่', content: 'กำหนดหัวข้อเรียนภาคต่อไป', timeStart: '10:00', timeEnd: '11:00', timeHrs: '1', status: 'S', student: { ...S1, round: '28' } },
          { no: 2, topic: 'วางแผนปีการศึกษาใหม่', content: 'กำหนดหัวข้อเรียนภาคต่อไป', timeStart: '11:30', timeEnd: '12:30', timeHrs: '1', status: 'S', student: { ...S2, round: '19' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 6,
    days: [
      {
        day: 1, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 ฟิสิกส์ใหม่', content: 'กลศาสตร์ควอนตัมเบื้องต้น', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '1' } },
          { no: 2, topic: 'บทที่ 1 คณิตศาสตร์ใหม่', content: 'สถิติและการวิเคราะห์ข้อมูล', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '1' } },
        ]
      },
      {
        day: 5, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 ฟิสิกส์ใหม่', content: 'ทวิภาวะคลื่น-อนุภาค', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '2' } },
          { no: 2, topic: 'บทที่ 1 เคมีใหม่', content: 'เคมีไฟฟ้าเบื้องต้น', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '1' } },
          { no: 3, topic: 'บทที่ 1 ชีววิทยาใหม่', content: 'ระบบร่างกายมนุษย์เบื้องต้น', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '1' } },
        ]
      },
      {
        day: 8, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 ฟิสิกส์ใหม่', content: 'หลักความไม่แน่นอนไฮเซนเบิร์ก', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '3' } },
          { no: 2, topic: 'บทที่ 1 คณิตศาสตร์ใหม่', content: 'การทดสอบสมมติฐาน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '2' } },
        ]
      },
      {
        day: 12, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 2 ฟิสิกส์นิวเคลียร์', content: 'กัมมันตภาพรังสีและการสลายตัว', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '4' } },
          { no: 2, topic: 'บทที่ 1 เคมีใหม่', content: 'การคำนวณในเซลล์ไฟฟ้าเคมี', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '2' } },
        ]
      },
      {
        day: 15, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 2 ฟิสิกส์นิวเคลียร์', content: 'ปฏิกิริยาฟิชชันและฟิวชัน', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '5' } },
          { no: 2, topic: 'บทที่ 1 คณิตศาสตร์ใหม่', content: 'ความน่าจะเป็นแบบมีเงื่อนไข', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '3' } },
          { no: 3, topic: 'บทที่ 1 ชีววิทยาใหม่', content: 'ระบบหมุนเวียนโลหิต', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '2' } },
        ]
      },
      {
        day: 19, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 2 ฟิสิกส์นิวเคลียร์', content: 'พลังงานนิวเคลียร์และโรงไฟฟ้า', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '6' } },
          { no: 2, topic: 'บทที่ 2 เคมีสิ่งแวดล้อม', content: 'มลพิษทางอากาศและน้ำ', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '3' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 7,
    days: [
      {
        day: 6, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ฟิสิกส์ดาราศาสตร์', content: 'กฎของเคปเลอร์และแรงโน้มถ่วง', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '7' } },
          { no: 2, topic: 'บทที่ 2 สถิติ', content: 'การวิเคราะห์ความแปรปรวน ANOVA', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '4' } },
          { no: 3, topic: 'บทที่ 2 เคมีสิ่งแวดล้อม', content: 'ภาวะโลกร้อนและก๊าซเรือนกระจก', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '4' } },
        ]
      },
      {
        day: 13, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ฟิสิกส์ดาราศาสตร์', content: 'ดาวฤกษ์และวงจรชีวิตดาว', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '8' } },
          { no: 2, topic: 'บทที่ 2 ชีววิทยา', content: 'ระบบประสาทและฮอร์โมน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '3' } },
        ]
      },
      {
        day: 20, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ฟิสิกส์ดาราศาสตร์', content: 'กาแล็กซีและบิ๊กแบง', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '9' } },
          { no: 2, topic: 'บทที่ 2 สถิติ', content: 'การถดถอยเชิงเส้นและสหสัมพันธ์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '5' } },
          { no: 3, topic: 'บทที่ 2 ชีววิทยา', content: 'ระบบสืบพันธุ์และการเจริญเติบโต', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '4' } },
        ]
      },
      { day: 28, weekDay: 'Tu', holiday: 'วันเฉลิมพระชนมพรรษา ร.10', activity: [] },
    ]
  },

  {
    year: 2569, month: 8,
    days: [
      {
        day: 3, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 4 ทฤษฎีสัมพัทธภาพ', content: 'สัมพัทธภาพพิเศษของไอน์สไตน์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '10' } },
          { no: 2, topic: 'บทที่ 3 สถิติ', content: 'การวิเคราะห์อนุกรมเวลา', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '6' } },
          { no: 3, topic: 'บทที่ 3 เคมีอุตสาหกรรม', content: 'กระบวนการฮาเบอร์-บ๊อช', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '5' } },
        ]
      },
      {
        day: 10, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 4 ทฤษฎีสัมพัทธภาพ', content: 'E=mc² และพลังงานมวลสาร', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '11' } },
          { no: 2, topic: 'บทที่ 3 ชีววิทยา', content: 'การสังเคราะห์แสง', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '5' } },
        ]
      },
      { day: 12, weekDay: 'We', holiday: 'วันเฉลิมพระชนมพรรษา สมเด็จพระนางเจ้าฯ / วันแม่แห่งชาติ', activity: [] },
      {
        day: 14, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 4 ทฤษฎีสัมพัทธภาพ', content: 'สัมพัทธภาพทั่วไปและกาลอวกาศ', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '12' } },
          { no: 2, topic: 'บทที่ 3 สถิติ', content: 'Machine Learning เบื้องต้น', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '7' } },
          { no: 3, topic: 'บทที่ 3 เคมีอุตสาหกรรม', content: 'อุตสาหกรรมปิโตรเคมี', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '6' } },
        ]
      },
      {
        day: 17, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทดสอบย่อย', content: 'ฟิสิกส์บทที่ 1-4', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '13' } },
          { no: 2, topic: 'ทดสอบย่อย', content: 'คณิตศาสตร์บทที่ 1-3', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '8' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 9,
    days: [
      {
        day: 7, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 ฟิสิกส์เชิงคำนวณ', content: 'การจำลองระบบด้วยคอมพิวเตอร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '14' } },
          { no: 2, topic: 'บทที่ 4 เคมีวิเคราะห์', content: 'สเปกโทรสโกปี', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '7' } },
          { no: 3, topic: 'บทที่ 3 ชีววิทยา', content: 'การหายใจระดับเซลล์', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '6' } },
        ]
      },
      {
        day: 14, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 ฟิสิกส์เชิงคำนวณ', content: 'วิธีเชิงตัวเลขและ Monte Carlo', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '15' } },
          { no: 2, topic: 'บทที่ 4 สถิติ', content: 'Bayesian Statistics', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '9' } },
        ]
      },
      {
        day: 18, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 ฟิสิกส์เชิงคำนวณ', content: 'การวิเคราะห์ข้อมูลทางวิทยาศาสตร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '16' } },
          { no: 2, topic: 'บทที่ 4 เคมีวิเคราะห์', content: 'แมสสเปกโทรเมทรี', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '8' } },
          { no: 3, topic: 'บทที่ 4 ชีววิทยา', content: 'พันธุวิศวกรรมและไบโอเทค', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '7' } },
        ]
      },
      {
        day: 21, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทดสอบย่อย', content: 'ฟิสิกส์บทที่ 5', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '17' } },
          { no: 2, topic: 'ทดสอบย่อย', content: 'คณิตศาสตร์บทที่ 4', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '10' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 10,
    days: [
      {
        day: 5, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทบทวนก่อนสอบปลายภาค', content: 'สรุปฟิสิกส์ทั้งเล่ม', timeStart: '10:00', timeEnd: '13:00', timeHrs: '3', status: 'S', student: { ...S1, round: '18' } },
          { no: 2, topic: 'ทบทวนก่อนสอบปลายภาค', content: 'สรุปเคมีทั้งเล่ม', timeStart: '14:00', timeEnd: '17:00', timeHrs: '3', status: 'S', student: { ...S3, round: '9' } },
        ]
      },
      {
        day: 12, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทบทวนก่อนสอบปลายภาค', content: 'สรุปคณิตศาสตร์ทั้งเล่ม', timeStart: '10:00', timeEnd: '13:00', timeHrs: '3', status: 'S', student: { ...S2, round: '11' } },
          { no: 2, topic: 'ทบทวนก่อนสอบปลายภาค', content: 'สรุปชีววิทยาทั้งเล่ม', timeStart: '14:00', timeEnd: '17:00', timeHrs: '3', status: 'S', student: { ...S4, round: '8' } },
        ]
      },
      { day: 13, weekDay: 'Tu', holiday: 'วันคล้ายวันสวรรคต พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช', activity: [] },
      {
        day: 19, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'เฉลยข้อสอบ Mock', content: 'ฟิสิกส์รอบสุดท้าย', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '19' } },
          { no: 2, topic: 'เฉลยข้อสอบ Mock', content: 'เคมีรอบสุดท้าย', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '10' } },
          { no: 3, topic: 'เฉลยข้อสอบ Mock', content: 'ชีววิทยารอบสุดท้าย', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '9' } },
        ]
      },
      { day: 23, weekDay: 'Fr', holiday: 'วันปิยมหาราช', activity: [] },
    ]
  },

  {
    year: 2569, month: 11,
    days: [
      {
        day: 2, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'เตรียมสอบ PAT', content: 'ฟิสิกส์ PAT2 ย้อนหลัง 5 ปี', timeStart: '10:00', timeEnd: '13:00', timeHrs: '3', status: 'S', student: { ...S1, round: '20' } },
          { no: 2, topic: 'เตรียมสอบ PAT', content: 'คณิตศาสตร์ PAT1 ย้อนหลัง 5 ปี', timeStart: '14:00', timeEnd: '17:00', timeHrs: '3', status: 'S', student: { ...S2, round: '12' } },
        ]
      },
      {
        day: 6, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'เตรียมสอบ PAT', content: 'เคมี PAT2 ย้อนหลัง 5 ปี', timeStart: '10:00', timeEnd: '13:00', timeHrs: '3', status: 'S', student: { ...S3, round: '11' } },
          { no: 2, topic: 'เตรียมสอบ PAT', content: 'ชีววิทยา PAT2 ย้อนหลัง 5 ปี', timeStart: '14:00', timeEnd: '17:00', timeHrs: '3', status: 'S', student: { ...S4, round: '10' } },
        ]
      },
      {
        day: 9, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'สอบ Mock PAT รอบ 2', content: 'ฟิสิกส์ข้อสอบจำลอง', timeStart: '09:00', timeEnd: '12:00', timeHrs: '3', status: 'S', student: { ...S1, round: '21' } },
          { no: 2, topic: 'สอบ Mock PAT รอบ 2', content: 'คณิตศาสตร์ข้อสอบจำลอง', timeStart: '13:00', timeEnd: '16:00', timeHrs: '3', status: 'S', student: { ...S2, round: '13' } },
        ]
      },
      {
        day: 16, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'สอบ Mock PAT รอบ 2', content: 'เคมีข้อสอบจำลอง', timeStart: '09:00', timeEnd: '12:00', timeHrs: '3', status: 'S', student: { ...S3, round: '12' } },
          { no: 2, topic: 'สอบ Mock PAT รอบ 2', content: 'ชีววิทยาข้อสอบจำลอง', timeStart: '13:00', timeEnd: '16:00', timeHrs: '3', status: 'S', student: { ...S4, round: '11' } },
        ]
      },
    ]
  },

  {
    year: 2569, month: 12,
    days: [
      {
        day: 4, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'สรุปปีการศึกษา', content: 'ทบทวนฟิสิกส์ทุกบท', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '22' } },
          { no: 2, topic: 'สรุปปีการศึกษา', content: 'ทบทวนคณิตศาสตร์ทุกบท', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '14' } },
          { no: 3, topic: 'สรุปปีการศึกษา', content: 'ทบทวนเคมีทุกบท', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '13' } },
        ]
      },
      { day: 5, weekDay: 'Sa', holiday: 'วันคล้ายวันพระบรมราชสมภพ ร.9 / วันพ่อแห่งชาติ', activity: [] },
      {
        day: 7, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'สรุปปีการศึกษา', content: 'ทบทวนชีววิทยาทุกบท', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S4, round: '12' } },
          { no: 2, topic: 'วางแผนการเรียนปี 2570', content: 'กำหนดเป้าหมายและตารางเรียน', timeStart: '13:00', timeEnd: '14:00', timeHrs: '1', status: 'S', student: { ...S1, round: '23' } },
          { no: 3, topic: 'วางแผนการเรียนปี 2570', content: 'กำหนดเป้าหมายและตารางเรียน', timeStart: '14:30', timeEnd: '15:30', timeHrs: '1', status: 'S', student: { ...S2, round: '15' } },
        ]
      },
      { day: 10, weekDay: 'Th', holiday: 'วันรัฐธรรมนูญ', activity: [] },
      { day: 31, weekDay: 'Th', holiday: 'วันสิ้นปี', activity: [] },
    ]
  },

  // ══════════════════════ พ.ศ. 2570 (2027) ══════════════════════

  {
    year: 2570, month: 1,
    days: [
      { day: 1, weekDay: 'Fr', holiday: 'วันขึ้นปีใหม่', activity: [] },
      {
        day: 4, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 กลศาสตร์ควอนตัม', content: 'ทวิภาวะคลื่น-อนุภาค', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '1' } },
          { no: 2, topic: 'บทที่ 1 สถิติและความน่าจะเป็น', content: 'การแจกแจงความน่าจะเป็น', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '1' } },
        ]
      },
      {
        day: 8, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 กลศาสตร์ควอนตัม', content: 'หลักความไม่แน่นอนของไฮเซนเบิร์ก', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '2' } },
          { no: 2, topic: 'บทที่ 1 เคมีอินทรีย์ขั้นสูง', content: 'สเตอริโอเคมีและไอโซเมอร์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '1' } },
          { no: 3, topic: 'บทที่ 1 ชีวโมเลกุล', content: 'โปรตีนและกรดอะมิโน', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '1' } },
        ]
      },
      {
        day: 11, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 กลศาสตร์ควอนตัม', content: 'ฟังก์ชันคลื่นและสมการชเรอดิงเงอร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '3' } },
          { no: 2, topic: 'บทที่ 1 สถิติและความน่าจะเป็น', content: 'การทดสอบสมมติฐาน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '2' } },
        ]
      },
    ]
  },

  {
    year: 2570, month: 3,
    days: [
      {
        day: 5, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 2 ฟิสิกส์นิวเคลียร์', content: 'ปฏิกิริยานิวเคลียร์ฟิชชันและฟิวชัน', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '5' } },
          { no: 2, topic: 'บทที่ 2 สถิติ', content: 'การวิเคราะห์ความแปรปรวน ANOVA', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '4' } },
          { no: 3, topic: 'บทที่ 2 เคมีอินทรีย์', content: 'กลไกปฏิกิริยาและตัวกลาง', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '3' } },
        ]
      },
      {
        day: 8, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 2 ฟิสิกส์นิวเคลียร์', content: 'พลังงานนิวเคลียร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '6' } },
          { no: 2, topic: 'บทที่ 2 ชีวโมเลกุล', content: 'คาร์โบไฮเดรตและไขมัน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '3' } },
        ]
      },
      {
        day: 15, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ฟิสิกส์ดาราศาสตร์', content: 'กฎของเคปเลอร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '7' } },
          { no: 2, topic: 'บทที่ 2 สถิติ', content: 'การถดถอยและสหสัมพันธ์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '5' } },
          { no: 3, topic: 'บทที่ 2 เคมีอินทรีย์', content: 'ปฏิกิริยาการแทนที่และการเติม', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '4' } },
        ]
      },
      {
        day: 19, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ฟิสิกส์ดาราศาสตร์', content: 'ดาวฤกษ์และวงจรชีวิต', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '8' } },
          { no: 2, topic: 'บทที่ 2 ชีวโมเลกุล', content: 'เอนไซม์และจลนพลศาสตร์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '4' } },
        ]
      },
    ]
  },

  {
    year: 2570, month: 4,
    days: [
      { day: 6, weekDay: 'Tu', holiday: 'วันจักรี', activity: [] },
      {
        day: 12, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทบทวนก่อนสอบ', content: 'ฟิสิกส์บทที่ 1-3', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '9' } },
          { no: 2, topic: 'ทบทวนก่อนสอบ', content: 'คณิตศาสตร์บทที่ 1-2', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '6' } },
          { no: 3, topic: 'ทบทวนก่อนสอบ', content: 'เคมีบทที่ 1-2', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '5' } },
        ]
      },
      { day: 13, weekDay: 'Tu', holiday: 'วันสงกรานต์', activity: [] },
      { day: 14, weekDay: 'We', holiday: 'วันสงกรานต์', activity: [] },
      { day: 15, weekDay: 'Th', holiday: 'วันสงกรานต์', activity: [] },
      {
        day: 19, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 4 ทฤษฎีสัมพัทธภาพ', content: 'สัมพัทธภาพพิเศษ', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '10' } },
          { no: 2, topic: 'บทที่ 2 ชีวโมเลกุล', content: 'เมแทบอลิซึมและพลังงาน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '5' } },
        ]
      },
    ]
  },

  {
    year: 2570, month: 5,
    days: [
      { day: 1, weekDay: 'Sa', holiday: 'วันแรงงานแห่งชาติ', activity: [] },
      { day: 4, weekDay: 'Tu', holiday: 'วันฉัตรมงคล', activity: [] },
      {
        day: 10, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 4 ทฤษฎีสัมพัทธภาพ', content: 'E=mc² และพลังงานมวลสาร', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '11' } },
          { no: 2, topic: 'บทที่ 3 สถิติ', content: 'Bayesian Statistics', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '7' } },
          { no: 3, topic: 'บทที่ 3 เคมีอินทรีย์', content: 'สารชีวโมเลกุลในอาหาร', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '6' } },
        ]
      },
      {
        day: 17, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 ฟิสิกส์เชิงคำนวณ', content: 'Simulation ด้วย Python', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '12' } },
          { no: 2, topic: 'บทที่ 3 สถิติ', content: 'Neural Network เบื้องต้น', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '8' } },
        ]
      },
      {
        day: 21, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 ฟิสิกส์เชิงคำนวณ', content: 'Monte Carlo Simulation', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '13' } },
          { no: 2, topic: 'บทที่ 3 ชีวโมเลกุล', content: 'DNA Recombinant Technology', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '6' } },
          { no: 3, topic: 'บทที่ 3 เคมีอินทรีย์', content: 'ยาและสารชีวภาพ', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '7' } },
        ]
      },
    ]
  },

  {
    year: 2570, month: 7,
    days: [
      {
        day: 5, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทบทวนก่อนสอบกลางภาค', content: 'ฟิสิกส์สมัยใหม่', timeStart: '10:00', timeEnd: '13:00', timeHrs: '3', status: 'S', student: { ...S1, round: '14' } },
          { no: 2, topic: 'ทบทวนก่อนสอบกลางภาค', content: 'สถิติและคณิตศาสตร์', timeStart: '14:00', timeEnd: '17:00', timeHrs: '3', status: 'S', student: { ...S2, round: '9' } },
        ]
      },
      {
        day: 12, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'เฉลยข้อสอบกลางภาค', content: 'ฟิสิกส์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '15' } },
          { no: 2, topic: 'เฉลยข้อสอบกลางภาค', content: 'เคมี', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '8' } },
          { no: 3, topic: 'เฉลยข้อสอบกลางภาค', content: 'ชีววิทยา', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '7' } },
        ]
      },
      {
        day: 19, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 6 ควอนตัมขั้นสูง', content: 'Quantum Entanglement', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '16' } },
          { no: 2, topic: 'บทที่ 4 สถิติ', content: 'Deep Learning เบื้องต้น', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '10' } },
        ]
      },
      { day: 28, weekDay: 'We', holiday: 'วันเฉลิมพระชนมพรรษา ร.10', activity: [] },
    ]
  },

  {
    year: 2570, month: 8,
    days: [
      {
        day: 2, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 6 ควอนตัมขั้นสูง', content: 'Quantum Computing เบื้องต้น', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '17' } },
          { no: 2, topic: 'บทที่ 4 เคมีอุตสาหกรรม', content: 'กระบวนการอุตสาหกรรมปิโตรเคมี', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S3, round: '9' } },
          { no: 3, topic: 'บทที่ 4 ชีวโมเลกุล', content: 'CRISPR และการตัดต่อยีน', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '8' } },
        ]
      },
      {
        day: 9, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 6 ควอนตัมขั้นสูง', content: 'อัลกอริทึมควอนตัม', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '18' } },
          { no: 2, topic: 'บทที่ 4 สถิติ', content: 'Computer Vision เบื้องต้น', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '11' } },
        ]
      },
      { day: 12, weekDay: 'Th', holiday: 'วันเฉลิมพระชนมพรรษา สมเด็จพระนางเจ้าฯ / วันแม่แห่งชาติ', activity: [] },
      {
        day: 16, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทดสอบย่อย', content: 'ฟิสิกส์ขั้นสูงบทที่ 5-6', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '19' } },
          { no: 2, topic: 'ทดสอบย่อย', content: 'สถิติบทที่ 3-4', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '12' } },
          { no: 3, topic: 'ทดสอบย่อย', content: 'เคมีอุตสาหกรรม', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '10' } },
        ]
      },
    ]
  },

  {
    year: 2570, month: 10,
    days: [
      {
        day: 4, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทบทวนก่อนสอบปลายภาค', content: 'ฟิสิกส์สมัยใหม่ทุกบท', timeStart: '10:00', timeEnd: '13:00', timeHrs: '3', status: 'S', student: { ...S1, round: '20' } },
          { no: 2, topic: 'ทบทวนก่อนสอบปลายภาค', content: 'สถิติและ AI', timeStart: '14:00', timeEnd: '17:00', timeHrs: '3', status: 'S', student: { ...S2, round: '13' } },
        ]
      },
      { day: 13, weekDay: 'We', holiday: 'วันคล้ายวันสวรรคต พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช', activity: [] },
      {
        day: 18, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ทบทวนก่อนสอบปลายภาค', content: 'เคมีอุตสาหกรรมและสิ่งแวดล้อม', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S3, round: '11' } },
          { no: 2, topic: 'ทบทวนก่อนสอบปลายภาค', content: 'ชีวโมเลกุลและไบโอเทค', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '9' } },
        ]
      },
      { day: 23, weekDay: 'Sa', holiday: 'วันปิยมหาราช', activity: [] },
    ]
  },

  {
    year: 2570, month: 12,
    days: [
      { day: 5, weekDay: 'Su', holiday: 'วันคล้ายวันพระบรมราชสมภพ ร.9 / วันพ่อแห่งชาติ', activity: [] },
      {
        day: 7, weekDay: 'Tu', holiday: null, activity: [
          { no: 1, topic: 'สรุปปีการศึกษา 2570', content: 'ฟิสิกส์และประเมินผล', timeStart: '10:00', timeEnd: '11:30', timeHrs: '1.5', status: 'S', student: { ...S1, round: '21' } },
          { no: 2, topic: 'สรุปปีการศึกษา 2570', content: 'คณิตศาสตร์และประเมินผล', timeStart: '12:00', timeEnd: '13:30', timeHrs: '1.5', status: 'S', student: { ...S2, round: '14' } },
          { no: 3, topic: 'สรุปปีการศึกษา 2570', content: 'เคมีและประเมินผล', timeStart: '14:00', timeEnd: '15:30', timeHrs: '1.5', status: 'S', student: { ...S3, round: '12' } },
        ]
      },
      { day: 10, weekDay: 'Fr', holiday: 'วันรัฐธรรมนูญ', activity: [] },
      {
        day: 13, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'วางแผนการเรียนปี 2571', content: 'กำหนดเป้าหมายและตารางเรียน', timeStart: '10:00', timeEnd: '11:00', timeHrs: '1', status: 'S', student: { ...S1, round: '22' } },
          { no: 2, topic: 'วางแผนการเรียนปี 2571', content: 'กำหนดเป้าหมายและตารางเรียน', timeStart: '11:30', timeEnd: '12:30', timeHrs: '1', status: 'S', student: { ...S4, round: '10' } },
        ]
      },
      { day: 31, weekDay: 'Fr', holiday: 'วันสิ้นปี', activity: [] },
    ]
  },

  // ══════════════════════ พ.ศ. 2571 (2028) ══════════════════════

  {
    year: 2571, month: 1,
    days: [
      { day: 1, weekDay: 'Sa', holiday: 'วันขึ้นปีใหม่', activity: [] },
      {
        day: 3, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 ฟิสิกส์ประยุกต์', content: 'การจำลองระบบฟิสิกส์ด้วยคอมพิวเตอร์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '1' } },
          { no: 2, topic: 'บทที่ 1 คณิตศาสตร์การเงิน', content: 'ดอกเบี้ยทบต้นและมูลค่าเงิน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '1' } },
          { no: 3, topic: 'บทที่ 1 เคมีวัสดุ', content: 'โครงสร้างและสมบัติของวัสดุ', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '1' } },
        ]
      },
      {
        day: 7, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 ฟิสิกส์ประยุกต์', content: 'วิธีเชิงตัวเลขสำหรับ ODE', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '2' } },
          { no: 2, topic: 'บทที่ 1 ชีวฟิสิกส์', content: 'กลศาสตร์ของร่างกายมนุษย์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '1' } },
        ]
      },
      {
        day: 10, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 ฟิสิกส์ประยุกต์', content: 'Finite Element Method เบื้องต้น', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '3' } },
          { no: 2, topic: 'บทที่ 1 คณิตศาสตร์การเงิน', content: 'NPV, IRR และการตัดสินใจลงทุน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '2' } },
          { no: 3, topic: 'บทที่ 1 เคมีวัสดุ', content: 'โลหะผสมและกระบวนการผลิต', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '2' } },
        ]
      },
      {
        day: 14, weekDay: 'Fr', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 1 ฟิสิกส์ประยุกต์', content: 'Computational Fluid Dynamics', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '4' } },
          { no: 2, topic: 'บทที่ 1 ชีวฟิสิกส์', content: 'คลื่นเสียงและอัลตราซาวด์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '2' } },
        ]
      },
    ]
  },

  {
    year: 2571, month: 4,
    days: [
      {
        day: 3, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ฟิสิกส์ประยุกต์', content: 'Monte Carlo Simulation', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '7' } },
          { no: 2, topic: 'บทที่ 3 คณิตศาสตร์การเงิน', content: 'การจัดพอร์ตโฟลิโอ Markowitz', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '5' } },
          { no: 3, topic: 'บทที่ 3 เคมีวัสดุ', content: 'นาโนเทคโนโลยีและวัสดุขั้นสูง', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '5' } },
        ]
      },
      { day: 6, weekDay: 'Th', holiday: 'วันจักรี', activity: [] },
      {
        day: 10, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ฟิสิกส์ประยุกต์', content: 'Machine Learning ในฟิสิกส์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '8' } },
          { no: 2, topic: 'บทที่ 3 ชีวฟิสิกส์', content: 'MRI และการถ่ายภาพทางการแพทย์', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S4, round: '5' } },
        ]
      },
      { day: 13, weekDay: 'Th', holiday: 'วันสงกรานต์', activity: [] },
      { day: 14, weekDay: 'Fr', holiday: 'วันสงกรานต์', activity: [] },
      { day: 15, weekDay: 'Sa', holiday: 'วันสงกรานต์', activity: [] },
      {
        day: 17, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 3 ฟิสิกส์ประยุกต์', content: 'Deep Reinforcement Learning', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '9' } },
          { no: 2, topic: 'บทที่ 3 คณิตศาสตร์การเงิน', content: 'Options และ Derivatives', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '6' } },
          { no: 3, topic: 'บทที่ 3 เคมีวัสดุ', content: 'กราฟีนและวัสดุ 2D', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '6' } },
        ]
      },
      {
        day: 24, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'สรุปและประเมินผล', content: 'ฟิสิกส์ประยุกต์', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '10' } },
          { no: 2, topic: 'สรุปและประเมินผล', content: 'คณิตศาสตร์การเงิน', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '7' } },
          { no: 3, topic: 'สรุปและประเมินผล', content: 'เคมีวัสดุ', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '7' } },
        ]
      },
    ]
  },

  {
    year: 2571, month: 7,
    days: [
      {
        day: 3, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 ฟิสิกส์ประยุกต์', content: 'Quantum Simulation', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '12' } },
          { no: 2, topic: 'บทที่ 4 คณิตศาสตร์การเงิน', content: 'ทฤษฎีเกมส์และ Nash Equilibrium', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '9' } },
          { no: 3, topic: 'บทที่ 4 ชีวฟิสิกส์', content: 'Biophysics ของเซลล์มะเร็ง', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S4, round: '7' } },
        ]
      },
      {
        day: 10, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'บทที่ 5 ฟิสิกส์ประยุกต์', content: 'Quantum Error Correction', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '13' } },
          { no: 2, topic: 'บทที่ 4 คณิตศาสตร์การเงิน', content: 'Algorithmic Trading', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '10' } },
        ]
      },
      { day: 28, weekDay: 'Fr', holiday: 'วันเฉลิมพระชนมพรรษา ร.10', activity: [] },
    ]
  },

  {
    year: 2571, month: 12,
    days: [
      { day: 5, weekDay: 'Fr', holiday: 'วันคล้ายวันพระบรมราชสมภพ ร.9 / วันพ่อแห่งชาติ', activity: [] },
      { day: 10, weekDay: 'We', holiday: 'วันรัฐธรรมนูญ', activity: [] },
      {
        day: 15, weekDay: 'Mo', holiday: null, activity: [
          { no: 1, topic: 'ปิดหลักสูตร', content: 'สรุปผลการเรียนและมอบประกาศนียบัตร', timeStart: '10:00', timeEnd: '12:00', timeHrs: '2', status: 'S', student: { ...S1, round: '16' } },
          { no: 2, topic: 'ปิดหลักสูตร', content: 'สรุปผลการเรียนและมอบประกาศนียบัตร', timeStart: '13:00', timeEnd: '15:00', timeHrs: '2', status: 'S', student: { ...S2, round: '11' } },
          { no: 3, topic: 'ปิดหลักสูตร', content: 'สรุปผลการเรียนและมอบประกาศนียบัตร', timeStart: '15:30', timeEnd: '17:30', timeHrs: '2', status: 'S', student: { ...S3, round: '8' } },
        ]
      },
      { day: 31, weekDay: 'Fr', holiday: 'วันสิ้นปี', activity: [] },
    ]
  },
]
