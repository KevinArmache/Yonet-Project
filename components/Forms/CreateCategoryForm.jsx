import { Formik, Form } from 'formik';
import Input from './Input';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ImageUpload from './ImageUpload';
import axios from 'axios';


const CategoryFormSchema = Yup.object().shape({
  name: Yup.string().trim().required('Le nom est obligatoire'),
  description: Yup.string().trim().required('La description est obligatoire'),
});

const CategoryForm = ({
  initialValues = null,
  redirectPath = '',
  buttonText = 'Enregistrer',
  onSubmit = () => null
}) => {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialValues?.image ?? '');
  const [iconUrl, setIconUrl] = useState(initialValues?.icon ?? '');

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

  const uploadIcon = async icon => {
    if (!icon) return;

    let toastId;
    try {
      setDisabled(true);
      toastId = toast.loading('Veuillez patienter...');
      const { data } = await axios.post('/api/image-upload', { icon });
      setIconUrl(data?.url);
      toast.success('Téléchargé avec succès', { id: toastId });
    } catch (e) {
      toast.error('Echec lors du téléchargement', { id: toastId });
      setIconUrl('');
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
        await onSubmit({ ...values, image: imageUrl, icon: iconUrl });
      }
      toast.success('Créé avec succès', { id: toastId });
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

  const { image, icon, ...initialFormValues } = initialValues ?? {
    name: '',
    description: '',
    image: '',
    icon: ''
  };


  return (
    <div className='my-8'>
      <div className='mx-4 items-center sm:max-w-4xl sm:mx-auto'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-8 max-w-md">
            <ImageUpload
              initialImage={{ src: image, alt: initialFormValues.name }}
              onChangePicture={uploadImage}
              label="Image de la catégorie PNG, JPG Moins de 1Mo"
            />
          </div>
          <div className="mb-8 max-w-md">
            <ImageUpload
              initialImage={{ src: icon, alt: initialFormValues.name }}
              onChangePicture={uploadIcon}
              label="Icone de la catégorie (PNG ou SVG) Moins de 100Ko"
            />
          </div>
        </div>
        <Formik
          initialValues={initialFormValues}
          validationSchema={CategoryFormSchema}
          validateOnBlur={false}
          onSubmit={handleOnSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="space-y-8">
              <div className="space-y-6">
                <Input
                  name="name"
                  type="text"
                  label="Nom de la catégorie"
                  placeholder="Exemple: Photographe"
                  disabled={disabled}
                />

                <Input
                  name="description"
                  type="textarea"
                  label="Description de la catégorie"
                  placeholder="Description de la catégorie"
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

export default CategoryForm;