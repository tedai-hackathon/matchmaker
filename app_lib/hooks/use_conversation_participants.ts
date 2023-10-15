import { useState, useEffect, useMemo, useRef } from 'react';
import { LazyConversationParticipant } from '@/models';
import { Hub, SortDirection } from 'aws-amplify';
import { fetchConversationParticipant, fetchConversationParticipants } from '../services/conversation_participant_service';
import { useUser } from './use_user';
import { nothing } from 'immer';

export const useParticipant = (id: string) => {
  const [participant, setParticipant] = useState<LazyConversationParticipant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
            const fetchData = async () => {
            const data = await fetchConversationParticipant(id);
            setParticipant(data);
            setLoading(false);
        };
        fetchData();
    }
  }, [id]);

  return { participant, loading };
}

export const useParticipantList = (sorted?: SortDirection, maxElements?: number) => {
    const [participants, setParticipants] = useState<LazyConversationParticipant[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchingParticipants = useRef(false);
  
    const fetchData = async () => {
        const data = await fetchConversationParticipants(sorted, maxElements);
        setParticipants(data);
        setLoading(false);
        fetchingParticipants.current = false;
    };
  
    const listener = Hub.listen("datastore", async hubData => {
        const  { event, data } = hubData.payload;

        if (event === "modelSynced" && data.model.name === "ConversationParticipant" && !fetchingParticipants.current) {
            fetchingParticipants.current = true;
            await fetchData();
        }
      })
  
          
    useMemo(() => {
        listener();
    }, []);

    return { participants, loading };
}

export const useUserAndAIParticipants = () => {
    const userParticipant = useRef<LazyConversationParticipant>();
    const aiParticipant = useRef<LazyConversationParticipant>();
  
    const {user, email: userEmail} = useUser();
    const {participants, loading: loadingParticipants} = useParticipantList()
  
    useMemo(() => {
        if( !loadingParticipants && participants && participants.length > 0 ){
            if( userEmail ){
                userParticipant.current = participants.find(p => p.Name === userEmail);
            }
            aiParticipant.current = participants.find(p => p.Name === 'Vetta');
        }

    }, [userEmail, participants, loadingParticipants]);

    return { userParticipant: userParticipant.current, aiParticipant: aiParticipant.current };
}