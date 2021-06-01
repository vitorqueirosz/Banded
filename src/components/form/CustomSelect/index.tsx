import { forwardRef, InputHTMLAttributes, useCallback } from 'react';
import { TextField } from 'components/form';
import { SelectDropDown } from 'components/structure';
import { useMembersContext } from 'contexts';
import { ShortUserItem } from 'components/contexts/user';
import { ItemList } from 'components/structure/ItemList';
import * as S from './CustomSelect.styles';

export type CustomSelectProps = {
  onType: string;
} & InputHTMLAttributes<HTMLInputElement>

export const CustomSelect = forwardRef<
  HTMLInputElement,
  CustomSelectProps>(
    ({ onChange, onType }, ref) => {
      const {
        selectedMembers,
        error: membersError,
        setSelectedMembers,
        setError,
      } = useMembersContext();

      const handleRemoveMember = useCallback((userId: string) => {
        setSelectedMembers(prevState => prevState.filter(({ id }) => id !== userId));
        membersError && setError('');
      }, [setSelectedMembers, membersError, setError]);

      return (
        <S.Container>
          <TextField
            name="members"
            ref={ref}
            onChange={onChange}
            label="Membros"
            placeholder="Pesquise os membros"
            autoComplete="off"
          />
          {onType && (
            <SelectDropDown
              title="Adicionar membro"
            />
          )}
          {!!selectedMembers.length && (
            <ItemList error={membersError}>
              {selectedMembers.map(({ id, avatar, instrument, name }) => (
                <ShortUserItem
                  key={id}
                  avatar={avatar}
                  name={name}
                  instrument={instrument}
                  handleRemoveItem={() => handleRemoveMember(id)}
                />
              ))}
            </ItemList>
          )}
        </S.Container>
      );
    },
  );
