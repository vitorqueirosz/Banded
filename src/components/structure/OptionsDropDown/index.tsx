import { UsersMusician } from 'useCases';
import { Add, UserChip } from 'components/structure';
import * as S from './OptionsDropDown.styles';

export type OptionsDropDownProps = {
 options: UsersMusician[];
 handleDropDown: () => void;
}

export const OptionsDropDown = ({ options, handleDropDown }: OptionsDropDownProps) =>
  (
    <>
      <Add
        title="Adicionar membro"
        handleAdd={handleDropDown}
      />
      {options?.map(({ id, name, avatar, instrument }) => (
        <S.Option key={id}>
          <UserChip
            avatar={avatar}
            name={name}
            size="small"
            description={instrument}
          />
        </S.Option>
      ))}
      {!options.length && (
        <S.Option>
          <span>Nenhum resultado encontrado</span>
        </S.Option>
      )}
    </>
  );
