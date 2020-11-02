<template>
  <div>
    <SuccessForm />
    <div class="form-container">
      <h2>Форма клиента</h2>
      <form @submit.prevent="submit">
        <!-- ФИО -->
        <div class="row">
          <div class="form-group">
            <label for="last-name">Фамилия*</label>
            <input v-model.trim="form.lastName" v-bind:class="$v.form.lastName.$error ? 'is-invalid' : ''" type="text" id="last-name" class="form-control">
            <p v-if="$v.form.lastName.$dirty && !$v.form.lastName.required">Обязательное поле</p>
          </div>
          <div class="form-group">
            <label for="name">Имя*</label>
            <input v-model.trim="form.name" v-bind:class="$v.form.name.$error ? 'is-invalid' : ''" type="text" id="name" class="form-control">
            <p v-if="$v.form.name.$dirty && !$v.form.name.required">Обязательное поле</p>
          </div>
          <div class="form-group">
            <label for="father-name">Отчество</label>
            <input v-model.trim="form.fatherName" type="text" id="father-name" class="form-control">
          </div>
        </div>
        <div class="row">
          <!-- Дата рождения -->
          <div class="form-group">
            <label for="birthday">Дата Рождения*</label>
            <input v-model.trim="form.birthday" v-bind:class="$v.form.birthday.$error ? 'is-invalid' : ''" type="date" id="birthday" class="form-control">
            <p v-if="$v.form.birthday.$dirty && !$v.form.birthday.required">Обязательное поле</p>
          </div>
          <!-- Номер телефона -->
          <div class="form-group">
            <label for="phone">Номер телефона*</label>
            <input v-model.trim="form.phone" :class="$v.form.phone.$error ? 'is-invalid' : ''" type="text" id="phone" class="form-control">
            <p v-if="$v.form.phone.$dirty && $v.form.phone.$error">Обязательное поле</p>
          </div>
          <!-- Пол -->
          <div class="sex">
            <p>Пол</p>
            <div class="form-group">
              <input v-model="form.sex" type="radio" value="male" id="male">
              <label for="male">Мужчина</label>
            </div>
            <div class="form-group">
              <input v-model="form.sex" type="radio" value="female" id="female">
              <label for="female">Женщина</label>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Группа клиентов -->
          <div class="form-group">
            <label for="clients">Группа клиентов*</label>
            <select v-model="form.client" multiple :class="$v.form.client.$error ? 'is-invalid' : ''" id="clients" class="form-control">
              <option 
              v-for="(client, index) in clients"
              :value="client.value"
              :key="index">
                {{  client.label  }}
              </option>
            </select>
            <p v-if="$v.form.client.$dirty && !$v.form.client.required">Обязательное поле</p>
          </div>
          <!-- Лечащий врач -->
          <div class="form-group">
            <label for="doctor">Лечащий врач</label>
            <select v-model="form.doctor" id="doctor" class="form-control">
              <option 
              v-for="(doctor, index) in doctors"
              :value="doctor.value"
              :key="index">
                {{  doctor.label  }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <input v-model="form.agreeSms" type="checkbox" id="notification">
            <label for="notification">Отправлять СМС</label>
          </div>
        </div>
        <hr>
        <!-- Адрес -->
        <div class="row">
          <!-- Индекс -->
          <div class="form-group">
            <label for="zid-code">Индекс</label>
            <input v-model.trim="form.zipCode" type="number" id="zip-code" class="form-control">
          </div>
          <!-- Страна -->
          <div class="form-group">
            <label for="country">Страна</label>
            <input v-model.trim="form.contry" type="text" id="country" class="form-control">
          </div>
          <!-- Область -->
          <div class="form-group">
            <label for="region">Область</label>
            <input v-model.trim="form.region" type="text" id="region" class="form-control">
          </div>
        </div>
        <div class="row">
          <!-- Город -->
          <div class="form-group">
            <label for="city">Город*</label>
            <input v-model.trim="form.city" :class="$v.form.city.$error ? 'is-invalid' : ''" type="text" id="city" class="form-control">
            <p v-if="$v.form.city.$dirty && !$v.form.city.required">Обязательное поле</p>
          </div>
          <!-- Улица -->
          <div class="form-group">
            <label for="street">Улица</label>
            <input v-model.trim="form.street" type="text" id="street" class="form-control">
          </div>
          <!-- Дом -->
          <div class="form-group">
            <label for="hosue">Дом</label>
            <input v-model.trim="form.house" type="text" id="house" class="form-control">
          </div>
        </div>
        <hr>
        <!-- Паспорт -->
        <div class="row">
          <!-- Тип документа -->
          <div class="form-group">
            <label for="doctype">Тип документа*</label>
            <select v-model="form.doctype" id="doctype" class="form-control">
              <option 
              v-for="(doctype, index) in doctypes"
              :value="doctype.value"
              :key="index">
                {{  doctype.label  }}
              </option>
            </select>
            <p v-if="$v.form.doctype.$dirty && !$v.form.doctype.required">Обязательное поле</p>
          </div>
          <!-- Серия -->
          <div class="form-group">
            <label for="serialNumber">Серия</label>
            <input v-model.trim="form.serialNumber" type="text" id="serialNumber" class="form-control">
          </div>
          <!-- Номер -->
          <div class="form-group">
            <label for="number">Номер</label>
            <input v-model.trim="form.number" type="text" id="number" class="form-control">
          </div>
        </div>
        <div class="row">
          <!-- Кем выдан -->
          <div class="form-group">
            <label for="issuedby">Кем выдан</label>
            <textarea v-model.trim="form.issuedby" type="text" id="issuedby" class="form-control"></textarea>
          </div>
          <!-- Дата выдачи -->
          <div class="form-group">
            <label for="whenIssued">Дата Выдачи*</label>
            <input v-model.trim="form.whenIssued" v-bind:class="$v.form.whenIssued.$error ? 'is-invalid' : ''" type="date" id="whenIssued" class="form-control">
            <p v-if="$v.form.whenIssued.$dirty && !$v.form.whenIssued.required">Обязательное поле</p>
          </div>
        </div>
        
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import SuccessForm from './SuccessForm'


export default {
  name: "ClientForm",
  components: {
    SuccessForm
  },
  mixins:[validationMixin],
  data() {
    return {
      form: {
        lastName: '',
        name: '',
        fatherName: '',
        birthday: '',
        sex: "male",
        phone: '+7',
        client: [],
        doctor: "Иванов",
        agreeSms: true,
        zipCode: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
        doctype: 'passport',
        serialNumber: '',
        number: '',
        issuedby: '',
        whenIssued: ''
      },
      doctors: [
        {
          label: 'Иванов',
          value: 'Иванов'
        },
        {
          label: 'Зачаров',
          value: 'Зачаров'
        },
        {
          label: 'Чернышева',
          value: 'Чернышева'
        },
      ],
      clients: [
        {
          label: 'VIP',
          value: 'vip'
        },
        {
          label: 'Проблемные',
          value: 'проблемные'
        },
        {
          label: 'ОМС',
          value: 'омс'
        },
      ],
      doctypes: [
        {
          label: 'Паспорт',
          value: 'passport'
        },
        {
          label: 'Свид. о рождении',
          value: 'birth srtificate'
        },
        {
          label: 'Вод. удостоверение',
          value: 'license'
        },
      ]

    }
  },
  validations: {
    form: {
      lastName: { required },
      name: { required },
      birthday: { required },
      phone: { required, minLength:minLength(11) },
      client: { required },
      city: { required },
      doctype: { required },
      whenIssued: { required },
    }
  },
  methods: {
    checkForm(){
      this.$v.form.$touch();
      if(this.$v.form.$error) {
        console.log('ERROR')
      } else {
        console.log('all clear')
        document.querySelector('.modal').classList.add('show');
        document.querySelector('.form-container').classList.add('hide');
      }
    },
    submit(){
      this.checkForm();
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '@/assets/main.scss';
</style>