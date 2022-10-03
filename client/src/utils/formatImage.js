// config
import { apiConfig } from '../config';

export const distinguishImage = (image, characters = ['https', 'http']) => {
	const isExternalCloud = characters.some((character) => image.indexOf(character) >= 0);
	return isExternalCloud ? image : `${apiConfig.image_url}/${image}`;
};
