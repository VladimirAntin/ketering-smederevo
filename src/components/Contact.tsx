'use client';
import {memo, Suspense} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@/icons/SendIcon';
import Link from 'next/link';
import {contactItems} from '@/components/data/contact';
import Icon from '@/icons/Icon';
import {motion} from 'framer-motion';

type OrderData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
};

const EVENT_TYPES = [
  'Svadba',
  'Rodjendan',
  'Korporativni događaj',
  'Slava',
  'Maturska večera',
  'Ostalo',
];

const underlineInput = 'peer relative z-10 w-full border-0 border-b-2 border-stone-200 bg-transparent pb-2 pt-6 text-stone-900 transition focus:border-primary focus:outline-none';
const floatLabel = 'pointer-events-none absolute left-0 top-2 z-20 bg-white px-1 text-sm font-normal text-stone-400 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:tracking-widest peer-focus:text-primary peer-focus:uppercase';
const errorText = 'mt-1 text-xs text-red-600';
const getFloatLabelClass = (value?: string) =>
  value
    ? floatLabel + ' top-0 text-xs font-semibold tracking-widest text-primary uppercase'
    : floatLabel;

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: {errors, isSubmitSuccessful},
  } = useForm<OrderData>({
    defaultValues: {name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: ''},
    mode: 'onBlur',
  });

  const today = new Date().toISOString().split('T')[0];

  const onSubmit = (data: OrderData) => {
    console.log('Ketering narudžbina:', data);
  };

  if (isSubmitSuccessful) {
    return (
      <div className={'flex flex-col items-center justify-center py-12 text-center'}>
        <div className={'mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20'}>
          <SendIcon height={32} width={32} className={'text-primary'} />
        </div>
        <h4 className={'mb-2 text-2xl font-light text-stone-900'}>{'Zahtev primljen!'}</h4>
        <p className={'text-gray-500'}>{'Kontaktiraćemo vas u najkraćem roku sa ponudom.'}</p>
      </div>
    );
  }

  return (
    <form className={'space-y-8'} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={'grid gap-8 sm:grid-cols-2'}>
        <Controller
          name={'name'}
          control={control}
          rules={{
            required: 'Unesite ime i prezime.',
            minLength: {value: 2, message: 'Ime i prezime mora imati bar 2 karaktera.'},
          }}
          render={({field}) => (
            <div className={'relative'}>
              <input {...field} id={'name'} placeholder={' '} className={underlineInput} aria-invalid={Boolean(errors.name)} />
              <label htmlFor={'name'} className={getFloatLabelClass(field.value)}>{'Ime i prezime'}</label>
              {errors.name && <p className={errorText}>{errors.name.message}</p>}
            </div>
          )}
        />
        <Controller
          name={'email'}
          control={control}
          rules={{
            required: 'Unesite email adresu.',
            pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Unesite ispravnu email adresu.'},
          }}
          render={({field}) => (
            <div className={'relative'}>
              <input {...field} id={'email'} type={'email'} placeholder={' '} className={underlineInput} aria-invalid={Boolean(errors.email)} />
              <label htmlFor={'email'} className={getFloatLabelClass(field.value)}>{'Email'}</label>
              {errors.email && <p className={errorText}>{errors.email.message}</p>}
            </div>
          )}
        />
      </div>

      <div className={'grid gap-8 sm:grid-cols-2'}>
        <Controller
          name={'phone'}
          control={control}
          rules={{
            required: 'Unesite broj telefona.',
            pattern: {value: /^\+?[0-9\s/-]{8,20}$/, message: 'Unesite ispravan broj telefona.'},
          }}
          render={({field}) => (
            <div className={'relative'}>
              <input {...field} id={'phone'} type={'tel'} placeholder={' '} className={underlineInput} aria-invalid={Boolean(errors.phone)} />
              <label htmlFor={'phone'} className={getFloatLabelClass(field.value)}>{'Broj telefona'}</label>
              {errors.phone && <p className={errorText}>{errors.phone.message}</p>}
            </div>
          )}
        />
        <div className={'relative'}>
          <Controller
            name={'eventType'}
            control={control}
            rules={{required: 'Izaberite tip proslave.'}}
            render={({field}) => (
              <>
                <label className={'mb-1 block text-xs font-semibold tracking-widest text-primary uppercase'}>{'Tip proslave'}</label>
                <select
                  {...field}
                  className={'w-full border-0 border-b-2 border-stone-200 bg-transparent pb-2 pt-1 text-stone-900 transition focus:border-primary focus:outline-none'}
                  aria-invalid={Boolean(errors.eventType)}>
                  <option value={''} disabled>{'Izaberite...'}</option>
                  {EVENT_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.eventType && <p className={errorText}>{errors.eventType.message}</p>}
              </>
            )}
          />
        </div>
      </div>

      <div className={'grid gap-8 sm:grid-cols-2'}>
        <Controller
          name={'guests'}
          control={control}
          rules={{
            required: 'Unesite broj gostiju.',
            min: {value: 1, message: 'Broj gostiju mora biti veci od 0.'},
          }}
          render={({field}) => (
            <div className={'relative'}>
              <input {...field} id={'guests'} type={'number'} min={'1'} placeholder={' '} className={underlineInput} aria-invalid={Boolean(errors.guests)} />
              <label htmlFor={'guests'} className={getFloatLabelClass(field.value)}>{'Broj gostiju'}</label>
              {errors.guests && <p className={errorText}>{errors.guests.message}</p>}
            </div>
          )}
        />
      </div>

      <div>
        <label className={'mb-1 block text-xs font-semibold tracking-widest text-primary uppercase'}>{'Datum proslave'}</label>
        <Controller
          name={'date'}
          control={control}
          rules={{required: 'Izaberite datum proslave.'}}
          render={({field}) => (
            <>
              <input
                {...field}
                type={'date'}
                min={today}
                className={'w-full border-0 border-b-2 border-stone-200 bg-transparent pb-2 pt-1 text-stone-900 transition focus:border-primary focus:outline-none'}
                aria-invalid={Boolean(errors.date)}
              />
              {errors.date && <p className={errorText}>{errors.date.message}</p>}
            </>
          )}
        />
      </div>

      <Controller
        name={'message'}
        control={control}
        rules={{maxLength: {value: 800, message: 'Napomena moze imati najvise 800 karaktera.'}}}
        render={({field}) => (
          <div className={'relative'}>
            <textarea {...field} id={'message'} rows={3} placeholder={' '} className={'peer relative z-10 w-full resize-none border-0 border-b-2 border-stone-200 bg-transparent pb-2 pt-7 text-stone-900 transition focus:border-primary focus:outline-none'} aria-invalid={Boolean(errors.message)} />
            <label htmlFor={'message'} className={getFloatLabelClass(field.value)}>
              {'Napomena (opciono)'}
            </label>
            {errors.message && <p className={errorText}>{errors.message.message}</p>}
          </div>
        )}
      />

      <button
        type={'submit'}
        className={'group flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark'}>
        {'Pošaljite Zahtev'}
        <SendIcon className={'transition group-hover:translate-x-1'} height={16} width={16} />
      </button>
    </form>
  );
};

const Contact = () => (
  <section id={'contact'} className={'bg-stone-900 py-24'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-12 text-center'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'mb-3 inline-block text-sm font-semibold tracking-widest text-amber-400 uppercase'}>
          {'Kontakt'}
        </span>
        <h2 className={'mb-3 text-4xl text-white sm:text-5xl'}>{'Zatražite Ponudu'}</h2>
        <p className={'mx-auto max-w-xl text-white/50'}>
          {'Ispunite formu i odgovorićemo vam u roku od 24h sa personalizovanom ponudom'}
        </p>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 28}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-40px'}}
        transition={{duration: 0.6, delay: 0.1, ease: 'easeOut'}}
        className={'overflow-hidden rounded-3xl lg:grid lg:grid-cols-5'}>

        {/* Left decorative panel */}
        <div className={'relative hidden overflow-hidden bg-primary lg:col-span-2 lg:flex lg:flex-col lg:justify-between lg:p-10'}>
          <div className={'absolute inset-0 opacity-10'}
            style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
          <div className={'relative'}>
            <div className={'mb-8 text-4xl'}>{'🥪'}</div>
            <h3 className={'mb-3 text-2xl font-light text-white'}>{'Direktan kontakt'}</h3>
            <p className={'text-sm leading-relaxed text-white/65'}>
              {'Dostupni smo svakog radnog dana od 8 do 20h. Za hitne upite slobodno nas pozovite.'}
            </p>
          </div>
          <div className={'relative space-y-4'}>
            {contactItems.map((item, i) => (
              <Link
                key={i}
                href={item.href || '#'}
                className={'flex items-center gap-3 text-white/80 transition hover:text-white'}>
                <span className={'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10'}>
                  <Icon name={item.icon} height={15} width={15} className={'fill-current'} />
                </span>
                <div>
                  <div className={'text-[10px] font-semibold tracking-wider text-white/40 uppercase'}>{item.title}</div>
                  <div className={'text-sm font-medium'}>{item.value}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — form + map stacked */}
        <div className={'bg-white lg:col-span-3'}>
          {/* Mobile contact info */}
          <div className={'grid grid-cols-2 gap-3 p-6 lg:hidden'}>
            {contactItems.map((item, i) => (
              <Link
                key={i}
                href={item.href || '#'}
                className={'flex items-center gap-2 rounded-2xl border border-stone-100 bg-stone-50 p-3'}>
                <span className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10'}>
                  <Icon name={item.icon} height={14} width={14} className={'fill-current text-primary'} />
                </span>
                <div className={'min-w-0'}>
                  <div className={'text-[10px] font-semibold tracking-wider text-gray-400 uppercase'}>{item.title}</div>
                  <div className={'truncate text-xs font-semibold text-gray-700'}>{item.value}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Form */}
          <div className={'p-8 lg:p-10'}>
            <Suspense fallback={<div className={'h-64 animate-pulse rounded-2xl bg-stone-100'} />}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Map */}
          <div className={'h-56 w-full overflow-hidden border-t border-stone-100 lg:h-64'}>
            <iframe
              title={'Ketering Smederevo lokacija'}
              src={'https://www.openstreetmap.org/export/embed.html?bbox=20.88%2C44.64%2C20.98%2C44.70&layer=mapnik&marker=44.6636%2C20.9289'}
              className={'h-full w-full border-0'}
              loading={'lazy'}
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default memo(Contact);
