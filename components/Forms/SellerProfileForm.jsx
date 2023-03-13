import { Formik, Form } from 'formik';
import Input from './Input';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ImageUpload from './ImageUpload';
import axios from 'axios';


const SellerProfileFormSchema = Yup.object().shape({
  name: Yup.string().trim().required('Le nom est obligatoire'),
  bio: Yup.string().trim().max(150, 'Votre bio doit avoir moins de 150 caractères'),
  phoneNumber: Yup.string().trim().required('Le numéro de téléphone est obligatoire'),
});

const SellerProfileForm = ({
  initialValues = null,
  redirectPath = '',
  buttonText = 'Enregistrer',
  onSubmit = () => null
}) => {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialValues?.image ?? '');

  const uploadImage = async image => {
    if (!image) return;

    let toastId;
    try {
      setDisabled(true);
      toastId = toast.loading('Veuillez patienter...');
      const { data } = await axios.post('/api/image-upload', { image });
      setImageUrl(data?.url);
      toast.success('Téléchargé avec succès', { id: toastId });
    } catch (e) {
      toast.error('Echec lors du téléchargement', { id: toastId });
      setImageUrl('');
      console.error(e)
    } finally {
      setDisabled(false);
    }
  };




  const handleOnSubmit = async (values = null) => {
    let toastId;
    try {
      setDisabled(true);
      toastId = toast.loading('Veuillez Patienter...');
      // Submit data
      if (typeof onSubmit === 'function') {
        await onSubmit({ ...values, logo: imageUrl });
      }
      toast.success('Enregistré avec succès', { id: toastId });
      // Redirect user
      if (redirectPath) {
        router.push(redirectPath);
      }
    } catch (e) {
      toast.error('Echec lors de l\'enregistrement', { id: toastId });
      console.log(e)
      setDisabled(false);
    }
  };

  const { logo, ...initialFormValues } = initialValues ?? {
    name: '',
    bio: '',
    phoneNumber: '',
    website: '',
    email: '',
    logo: ''
  };


  return (
    <div className='my-8'>
      <div className='mx-4 items-center sm:max-w-4xl sm:mx-auto'>
          <div className="mb-8 max-w-md">
            <ImageUpload
              initialImage={{ src: logo, alt: initialFormValues.name }}
              onChangePicture={uploadImage}
              label="Votre Logo (PNG, JPG Moins de 1Mo)"
            />
          </div>
        <Formik
          initialValues={initialFormValues}
          validationSchema={SellerProfileFormSchema}
          validateOnBlur={false}
          onSubmit={handleOnSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="space-y-8">
              <div className="space-y-6">
                <Input
                  name="name"
                  type="text"
                  label="Nom du profil"
                  placeholder="Nom du profil"
                  disabled={disabled}
                />

                <Input
                  name="bio"
                  type="textarea"
                  label="Bio"
                  placeholder="Une petite description de ce que vous faites"
                  disabled={disabled}
                />

                <Input
                  name="phoneNumber"
                  type="text"
                  label="Numéro de téléphone"
                  placeholder="Numéro de téléphone"
                  disabled={disabled}
                />

                <Input
                  name="website"
                  type="text"
                  label="Site web"
                  placeholder="Site web"
                  disabled={disabled}
                />

                <Input
                  name="email"
                  type="text"
                  label="Adresse email professionnelle"
                  placeholder="Adresse email professionnelle"
                  disabled={disabled}
                />
                
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={disabled || !isValid}
                  className="bg-primary text-white py-2 px-6 rounded-md focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 hover:bg-second-variant transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary/80"
                >
                  {isSubmitting ? 'Veuillez Patienter...' : buttonText}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SellerProfileForm;